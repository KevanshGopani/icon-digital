import { ActionResponse } from "@/types/actionResponse";
import { dispatchHttpRequest } from "@/utils/httpRequestHandler";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

export async function signIn(payload: {
  email: string;
  password: string;
}): Promise<ActionResponse<any>> {
  if (!API_BASE_URL?.length) {
    return {
      success: false,
      errors: { message: "API base URL is not defined" },
    };
  }

  try {
    const response: any = await dispatchHttpRequest(
      `${API_BASE_URL}/auth/login`,
      "POST",
      { body: payload },
    );
    return { success: true, data: response.data.data, status: response.status };
  } catch (error: any) {
    throw error;
  }
}

export async function signOut(): Promise<ActionResponse<any>> {
  if (!API_BASE_URL?.length) {
    return {
      success: false,
      errors: { message: "API base URL is not defined" },
    };
  }

  try {
    const response: any = await dispatchHttpRequest(
      `${API_BASE_URL}/auth/logout`,
      "POST",
    );
    return { success: true, data: response.data, status: response.status };
  } catch (error: any) {
    throw error;
  }
}
