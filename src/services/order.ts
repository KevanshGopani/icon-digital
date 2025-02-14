import { ActionResponse } from "@/types/actionResponse";
import { dispatchHttpRequest } from "@/utils/httpRequestHandler";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

export async function getAllOrder(): Promise<ActionResponse<any>> {
  if (!API_BASE_URL?.length) {
    return {
      success: false,
      errors: { message: "API base URL is not defined" },
    };
  }

  try {
    const response: any = await dispatchHttpRequest(
      `${API_BASE_URL}/order`,
      "GET",
    );
    return { success: true, data: response.data.data, status: response.status };
  } catch (error: any) {
    throw error;
  }
}

export async function getAllOrderById(
  orderId: string,
): Promise<ActionResponse<any>> {
  if (!API_BASE_URL?.length) {
    return {
      success: false,
      errors: { message: "API base URL is not defined" },
    };
  }

  try {
    const response: any = await dispatchHttpRequest(
      `${API_BASE_URL}/order/${orderId}`,
      "GET",
    );
    return { success: true, data: response.data.data, status: response.status };
  } catch (error: any) {
    throw error;
  }
}

export async function createOrder(payload: any): Promise<ActionResponse<any>> {
    if (!API_BASE_URL?.length) {
      return {
        success: false,
        errors: { message: "API base URL is not defined" },
      };
    }
  
    try {
      const response: any = await dispatchHttpRequest(
        `${API_BASE_URL}/order`,
        "POST",
        payload
      );
      return { success: true, data: response.data.data, status: response.status };
    } catch (error: any) {
      throw error;
    }
  }
  
export async function deleteOrder(orderId: string): Promise<ActionResponse<any>> {
  if (!API_BASE_URL?.length) {
    return {
      success: false,
      errors: { message: "API base URL is not defined" },
    };
  }

  try {
    const response: any = await dispatchHttpRequest(
      `${API_BASE_URL}/order/${orderId}`,
      "DELETE",
    );
    return { success: true, data: response.data.data, status: response.status };
  } catch (error: any) {
    throw error;
  }
}

export async function updateOrder(
  orderId: string,
): Promise<ActionResponse<any>> { 
  if (!API_BASE_URL?.length) {
    return {
      success: false,
      errors: { message: "API base URL is not defined" },
    };
  }

  try {
    const response: any = await dispatchHttpRequest(
      `${API_BASE_URL}/order/${orderId}/status`,
      "PUT",
    );
    return { success: true, data: response.data.data, status: response.status };
  } catch (error: any) {
    throw error;
  }
}

export async function getOrderSummary(): Promise<ActionResponse<any>> {
  if (!API_BASE_URL?.length) {
    return {
      success: false,
      errors: { message: "API base URL is not defined" },
    };
  }

  try {
    const response: any = await dispatchHttpRequest(
      `${API_BASE_URL}/Order/stats/summary`,
      "GET",
    );
    return { success: true, data: response.data.data, status: response.status };
  } catch (error: any) {
    throw error;
  }
}
