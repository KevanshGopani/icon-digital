import { ActionResponse } from "@/types/actionResponse";
import { dispatchHttpRequest } from "@/utils/httpRequestHandler";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

export async function getAllUsers(): Promise<ActionResponse<any>> {
  if (!API_BASE_URL?.length) {
    return {
      success: false,
      errors: { message: "API base URL is not defined" },
    };
  }

  try {
    const response: any = await dispatchHttpRequest(
      `${API_BASE_URL}/user`,
      "GET",
    );
    return { success: true, data: response.data.data, status: response.status };
  } catch (error: any) {
    throw error;
  }
}

export async function getAllUserById(
  userId: string,
): Promise<ActionResponse<any>> {
  if (!API_BASE_URL?.length) {
    return {
      success: false,
      errors: { message: "API base URL is not defined" },
    };
  }

  try {
    const response: any = await dispatchHttpRequest(
      `${API_BASE_URL}/user/${userId}`,
      "GET",
    );
    return { success: true, data: response.data.data, status: response.status };
  } catch (error: any) {
    throw error;
  }
}

export async function deleteUser(userId: string): Promise<ActionResponse<any>> {
  if (!API_BASE_URL?.length) {
    return {
      success: false,
      errors: { message: "API base URL is not defined" },
    };
  }

  try {
    const response: any = await dispatchHttpRequest(
      `${API_BASE_URL}/user/${userId}`,
      "DELETE",
    );
    return { success: true, data: response.data.data, status: response.status };
  } catch (error: any) {
    throw error;
  }
}

export async function updateUser(
  userData: any,
  userId: string,
): Promise<ActionResponse<any>> {
  if (!API_BASE_URL?.length) {
    return {
      success: false,
      errors: { message: "API base URL is not defined" },
    };
  }

  try {
    const response: any = await dispatchHttpRequest(
      `${API_BASE_URL}/user/${userId}`,
      "PUT",
      { body: userData },
    );
    return { success: true, data: response.data.data, status: response.status };
  } catch (error: any) {
    throw error;
  }
}

export async function ChangeUserStatus(
  userData: any,
  userId: string,
): Promise<ActionResponse<any>> {
  if (!API_BASE_URL?.length) {
    return {
      success: false,
      errors: { message: "API base URL is not defined" },
    };
  }

  try {
    const response: any = await dispatchHttpRequest(
      `${API_BASE_URL}/user/${userId}/status`,
      "PUT",
      { body: userData },
    );
    return { success: true, data: response.data.data, status: response.status };
  } catch (error: any) {
    throw error;
  }
}

export async function getUserSummary(): Promise<ActionResponse<any>> {
  if (!API_BASE_URL?.length) {
    return {
      success: false,
      errors: { message: "API base URL is not defined" },
    };
  }

  try {
    const response: any = await dispatchHttpRequest(
      `${API_BASE_URL}/user/stats/summary`,
      "GET",
    );
    return { success: true, data: response.data.data, status: response.status };
  } catch (error: any) {
    throw error;
  }
}
