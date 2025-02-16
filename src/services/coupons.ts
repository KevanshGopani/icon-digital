import { ActionResponse } from "@/types/actionResponse";
import { dispatchHttpRequest } from "@/utils/httpRequestHandler";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

export async function getAllCoupon(): Promise<ActionResponse<any>> {
    if (!API_BASE_URL?.length) {
        return {
            success: false,
            errors: { message: "API base URL is not defined" },
        };
    }

    try {
        const response: any = await dispatchHttpRequest(
            `${API_BASE_URL}/coupon`,
            "GET",
        );
        return { success: true, data: response.data.data, status: response.status };
    } catch (error: any) {
        throw error;
    }
}

export async function getCouponById(
    couponId: string,
): Promise<ActionResponse<any>> {
    if (!API_BASE_URL?.length) {
        return {
            success: false,
            errors: { message: "API base URL is not defined" },
        };
    }

    try {
        const response: any = await dispatchHttpRequest(
            `${API_BASE_URL}/coupon/${couponId}`,
            "GET",
        );
        return { success: true, data: response.data.data, status: response.status };
    } catch (error: any) {
        throw error;
    }
}

export async function deleteCoupon(
    couponId: string,
): Promise<ActionResponse<any>> {
    if (!API_BASE_URL?.length) {
        return {
            success: false,
            errors: { message: "API base URL is not defined" },
        };
    }

    try {
        const response: any = await dispatchHttpRequest(
            `${API_BASE_URL}/coupon/${couponId}`,
            "DELETE",
        );
        return { success: true, data: response.data.data, status: response.status };
    } catch (error: any) {
        throw error;
    }
}

export async function updateCategories(
    couponData: any,
    couponId: string,
): Promise<ActionResponse<any>> {
    if (!API_BASE_URL?.length) {
        return {
            success: false,
            errors: { message: "API base URL is not defined" },
        };
    }

    try {
        const response: any = await dispatchHttpRequest(
            `${API_BASE_URL}/coupon/${couponId}`,
            "PUT",
            { body: couponData },
        );
        return { success: true, data: response.data.data, status: response.status };
    } catch (error: any) {
        throw error;
    }
}

export async function createCategories(
    couponData: any,
): Promise<ActionResponse<any>> {
    if (!API_BASE_URL?.length) {
        return {
            success: false,
            errors: { message: "API base URL is not defined" },
        };
    }

    try {
        const response: any = await dispatchHttpRequest(
            `${API_BASE_URL}/coupon`,
            "POST",
            { body: couponData },
        );
        return { success: true, data: response.data.data, status: response.status };
    } catch (error: any) {
        throw error;
    }
}
