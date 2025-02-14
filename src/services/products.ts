import { ActionResponse } from "@/types/actionResponse";
import { dispatchHttpRequest } from "@/utils/httpRequestHandler";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

export async function getAllProducts(): Promise<ActionResponse<any>> {
  if (!API_BASE_URL?.length) {
    return {
      success: false,
      errors: { message: "API base URL is not defined" },
    };
  }

  try {
    const response: any = await dispatchHttpRequest(
      `${API_BASE_URL}/product`,
      "GET",
    );
    return { success: true, data: response.data.data, status: response.status };
  } catch (error: any) {
    throw error;
  }
}

export async function getProductById(
  productId: string,
): Promise<ActionResponse<any>> {
  if (!API_BASE_URL?.length) {
    return {
      success: false,
      errors: { message: "API base URL is not defined" },
    };
  }

  try {
    const response: any = await dispatchHttpRequest(
      `${API_BASE_URL}/product/${productId}`,
      "GET",
    );
    return { success: true, data: response.data.data, status: response.status };
  } catch (error: any) {
    throw error;
  }
}

export async function deleteProduct(
  productId: string,
): Promise<ActionResponse<any>> {
  if (!API_BASE_URL?.length) {
    return {
      success: false,
      errors: { message: "API base URL is not defined" },
    };
  }

  try {
    const response: any = await dispatchHttpRequest(
      `${API_BASE_URL}/product/${productId}`,
      "DELETE",
    );
    return { success: true, data: response.data.data, status: response.status };
  } catch (error: any) {
    throw error;
  }
}

export async function updateProduct(
  productData: any,
  productId: string,
): Promise<ActionResponse<any>> {
  if (!API_BASE_URL?.length) {
    return {
      success: false,
      errors: { message: "API base URL is not defined" },
    };
  }

  try {
    const response: any = await dispatchHttpRequest(
      `${API_BASE_URL}/product/${productId}`,
      "PATCH",
      { body: productData },
    );
    return { success: true, data: response.data.data, status: response.status };
  } catch (error: any) {
    throw error;
  }
}

export async function createProducts(
  productData: any,
): Promise<ActionResponse<any>> {
  if (!API_BASE_URL?.length) {
    return {
      success: false,
      errors: { message: "API base URL is not defined" },
    };
  }

  try {
    const response: any = await dispatchHttpRequest(
      `${API_BASE_URL}/product`,
      "POST",
      { body: productData },
    );
    return { success: true, data: response.data.data, status: response.status };
  } catch (error: any) {
    throw error;
  }
}
