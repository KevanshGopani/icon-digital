import { handleGlobalError } from "./error-handler";

export async function dispatchHttpRequest<T>(
  endpoint: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  options: {
    headers?: Record<string, string>;
    queryParams?: Record<string, string | number>;
    body?: Record<string, unknown>;
    credentials?: RequestCredentials;
  } = {},
  imageUploadRoute?: boolean,
): Promise<{ data: T; status: number } | any> {
  const { headers = {}, queryParams, body, credentials = "include" } = options;

  const defaultHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  // Merge default headers with provided headers
  const finalHeaders = { ...defaultHeaders, ...headers };

  // Build query string
  const queryString = queryParams
    ? "?" +
      Object.entries(queryParams)
        .map(
          ([key, value]) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
        )
        .join("&")
    : "";

  const url = `${endpoint}${queryString}`;

  try {
    const response = await fetch(url, {
      method,
      headers: finalHeaders,
      body: imageUploadRoute
        ? (options.body as any)
        : method !== "GET" && body
          ? JSON.stringify(body)
          : undefined,
    });

    if (!response.ok) {
      const apiError = new ApiError(
        `HTTP error! status: ${response.status}, message: ${response.statusText}`,
        response.status,
        url,
        method,
      );
      throw apiError;
    }

    let responseData;
    try {
      responseData = await response.json();
    } catch (e) {
      responseData = null;
    }
    return { data: responseData as T, status: response.status };
  } catch (error: any) {
    let apiError;
    if (error instanceof ApiError) {
      apiError = error;
    } else {
      apiError = new ApiError(
        error?.message ?? "Internal Server Error",
        500,
        endpoint,
        method,
        error,
      );
    }
    handleGlobalError(apiError);
    throw new Error(JSON.stringify(apiError));
  }
}

export class ApiError extends Error {
  status?: number;
  endpoint?: string;
  method?: string;

  constructor(
    message: string,
    status: number,
    endpoint?: string,
    method?: string,
    originalError?: Error | string,
  ) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.endpoint = endpoint;
    this.method = method;

    // Append the original error stack trace for debugging.
    if (originalError instanceof Error) {
      this.stack += `\nCaused by: ${originalError.stack}`;
    } else if (typeof originalError === "string") {
      this.stack += `\nCaused by: ${originalError}`;
    }
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      endpoint: this.endpoint,
      method: this.method,
      stack: this.stack,
    };
  }

  static fromJSON(json: any): ApiError {
    const { message, status, endpoint, method, stack } = json;

    // Create a new ApiError instance
    const error = new ApiError(
      message || "Unknown error",
      status,
      endpoint,
      method,
    );

    // Attach the stack trace if available
    if (stack) {
      error.stack = stack;
    }

    return error;
  }
}
