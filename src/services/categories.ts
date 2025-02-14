import { ActionResponse } from "@/types/actionResponse";
import { dispatchHttpRequest } from "@/utils/httpRequestHandler";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

export async function getAllCategories(): Promise<ActionResponse<any>> {
  if (!API_BASE_URL?.length) {
    return {
      success: false,
      errors: { message: "API base URL is not defined" },
    };
  }

  try {
    const response: any = await dispatchHttpRequest(
      `${API_BASE_URL}/category`,
      "GET",
    );
    return { success: true, data: response.data.data, status: response.status };
  } catch (error: any) {
    throw error;
  }
}

export async function getCategoriesById(
  categoryId: string,
): Promise<ActionResponse<any>> {
  if (!API_BASE_URL?.length) {
    return {
      success: false,
      errors: { message: "API base URL is not defined" },
    };
  }

  try {
    const response: any = await dispatchHttpRequest(
      `${API_BASE_URL}/category/${categoryId}`,
      "GET",
    );
    return { success: true, data: response.data.data, status: response.status };
  } catch (error: any) {
    throw error;
  }
}

export async function deleteCategories(
  categoryId: string,
): Promise<ActionResponse<any>> {
  if (!API_BASE_URL?.length) {
    return {
      success: false,
      errors: { message: "API base URL is not defined" },
    };
  }

  try {
    const response: any = await dispatchHttpRequest(
      `${API_BASE_URL}/category/${categoryId}`,
      "DELETE",
    );
    return { success: true, data: response.data.data, status: response.status };
  } catch (error: any) {
    throw error;
  }
}

export async function updateCategories(
  categoryData: any,
  categoryId: string,
): Promise<ActionResponse<any>> {
  if (!API_BASE_URL?.length) {
    return {
      success: false,
      errors: { message: "API base URL is not defined" },
    };
  }

  try {
    const response: any = await dispatchHttpRequest(
      `${API_BASE_URL}/category/${categoryId}`,
      "PUT",
      { body: categoryData },
    );
    return { success: true, data: response.data.data, status: response.status };
  } catch (error: any) {
    throw error;
  }
}

export async function createCategories(
  categoryData: any,
): Promise<ActionResponse<any>> {
  if (!API_BASE_URL?.length) {
    return {
      success: false,
      errors: { message: "API base URL is not defined" },
    };
  }

  try {
    const response: any = await dispatchHttpRequest(
      `${API_BASE_URL}/category`,
      "POST",
      { body: categoryData },
    );
    return { success: true, data: response.data.data, status: response.status };
  } catch (error: any) {
    throw error;
  }
}
