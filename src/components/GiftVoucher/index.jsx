"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Loader from "../common/Loader";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteCoupon, getAllCoupon } from "@/services/coupons";

const GiftVoucher = () => {
    const {
        data: allCoupon,
        isLoading,
        refetch: refetchAllCoupon,
    } = useQuery({
        queryKey: ["all-coupon"],
        queryFn: async () => {
            const response = await getAllCoupon();
            return response?.data || [];
        },
        retry: false,
    });

    const handleDeleteCouponMutation = useMutation({
        mutationFn: async (couponId) => {
            await deleteCoupon(couponId);
        },
        onSuccess(data, variables, context) {
            refetchCategories();
            toast.success("Categories coupon successfully", {
                toastId: "deleted-successfully",
            });
        },
        onError(error, variables, context) {
            toast.error("Something went wrong!", { toastId: "Coupon-error" });
        },
    });

    const handleDeleteCoupon = (couponId) => {
        handleDeleteCouponMutation.mutateAsync(couponId);
    };

    return (
        <>
            <div className="rounded-sm border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="flex items-start justify-between">
                    <h4 className="mb-4 text-xl font-semibold text-black dark:text-white">
                        Gift Voucher List
                    </h4>

                    <div className="relative z-20 inline-block">
                        <select
                            name="#"
                            id="#"
                            className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none"
                        >
                            <option value="" className="dark:bg-boxdark">
                                Week
                            </option>
                            <option value="" className="dark:bg-boxdark">
                                Month
                            </option>
                            <option value="" className="dark:bg-boxdark">
                                Year
                            </option>
                        </select>
                        <span className="absolute right-3 top-1/2 z-10 -translate-y-1/2">
                            <svg
                                width="10"
                                height="6"
                                viewBox="0 0 10 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.47072 1.08816C0.47072 1.02932 0.500141 0.955772 0.54427 0.911642C0.647241 0.808672 0.809051 0.808672 0.912022 0.896932L4.85431 4.60386C4.92785 4.67741 5.06025 4.67741 5.14851 4.60386L9.09079 0.896932C9.19376 0.793962 9.35557 0.808672 9.45854 0.911642C9.56151 1.01461 9.5468 1.17642 9.44383 1.27939L5.50155 4.98632C5.22206 5.23639 4.78076 5.23639 4.51598 4.98632L0.558981 1.27939C0.50014 1.22055 0.47072 1.16171 0.47072 1.08816Z"
                                    fill="#637381"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M1.22659 0.546578L5.00141 4.09604L8.76422 0.557869C9.08459 0.244537 9.54201 0.329403 9.79139 0.578788C10.112 0.899434 10.0277 1.36122 9.77668 1.61224L9.76644 1.62248L5.81552 5.33722C5.36257 5.74249 4.6445 5.7544 4.19352 5.32924C4.19327 5.32901 4.19377 5.32948 4.19352 5.32924L0.225953 1.61241C0.102762 1.48922 -4.20186e-08 1.31674 -3.20269e-08 1.08816C-2.40601e-08 0.905899 0.0780105 0.712197 0.211421 0.578787C0.494701 0.295506 0.935574 0.297138 1.21836 0.539529L1.22659 0.546578ZM4.51598 4.98632C4.78076 5.23639 5.22206 5.23639 5.50155 4.98632L9.44383 1.27939C9.5468 1.17642 9.56151 1.01461 9.45854 0.911642C9.35557 0.808672 9.19376 0.793962 9.09079 0.896932L5.14851 4.60386C5.06025 4.67741 4.92785 4.67741 4.85431 4.60386L0.912022 0.896932C0.809051 0.808672 0.647241 0.808672 0.54427 0.911642C0.500141 0.955772 0.47072 1.02932 0.47072 1.08816C0.47072 1.16171 0.50014 1.22055 0.558981 1.27939L4.51598 4.98632Z"
                                    fill="#637381"
                                />
                            </svg>
                        </span>
                    </div>
                </div>
                {isLoading ? (
                    <Loader />
                ) : (
                    <table className="w-full border-collapse border border-stroke dark:border-strokedark">
                        <thead>
                            <tr className="bg-gray-100 dark:bg-strokedark">
                                <th className="border border-stroke px-4 py-2 dark:border-strokedark">
                                    Date
                                </th>
                                <th className="border border-stroke px-4 py-2 dark:border-strokedark">
                                    Purches By
                                </th>
                                <th className="border border-stroke px-4 py-2 dark:border-strokedark">
                                    Used By
                                </th>
                                <th className="border border-stroke px-4 py-2 dark:border-strokedark">
                                    Discription
                                </th>
                                <th className="border border-stroke px-4 py-2 dark:border-strokedark">
                                    Email
                                </th>
                                <th className="border border-stroke px-4 py-2 dark:border-strokedark">
                                    Phone Number
                                </th>
                                <th className="border border-stroke px-4 py-2 dark:border-strokedark">
                                    Product Details
                                </th>
                                <th className="border border-stroke px-4 py-2 dark:border-strokedark">
                                    Discount Amount
                                </th>
                                <th className="border border-stroke px-4 py-2 dark:border-strokedark">
                                    Total Amount
                                </th>
                                <th className="border border-stroke px-4 py-2 dark:border-strokedark">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {allCoupon.map((coupon) => (
                                <tr
                                    key={coupon.id}
                                    className="hover:bg-gray-50 dark:hover:bg-strokedark"
                                >
                                    <td className="border border-stroke px-4 py-2 dark:border-strokedark">
                                        {coupon.date}
                                    </td>
                                    <td className="border border-stroke px-4 py-2 dark:border-strokedark">
                                        {coupon.purchasedBy}
                                    </td>
                                    <td className="border border-stroke px-4 py-2 dark:border-strokedark">
                                        {coupon.usedBy}
                                    </td>
                                    <td className="border border-stroke px-4 py-2 dark:border-strokedark">
                                        {coupon.description}
                                    </td>
                                    <td className="border border-stroke px-4 py-2 dark:border-strokedark">
                                        {coupon.email}
                                    </td>
                                    <td className="border border-stroke px-4 py-2 dark:border-strokedark">
                                        {coupon.phoneNumber}
                                    </td>
                                    <td className="border border-stroke px-4 py-2 dark:border-strokedark">
                                        {coupon.productDetails}
                                    </td>
                                    <td className="border border-stroke px-4 py-2 dark:border-strokedark">
                                        ₹ {coupon.discountAmount}
                                    </td>
                                    <td className="border border-stroke px-4 py-2 dark:border-strokedark">
                                        ₹ {coupon.totalAmount}
                                    </td>
                                    <td className="space-y-5 border border-stroke px-4 py-2 text-center dark:border-strokedark">
                                        <button
                                            className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600"
                                            onClick={() => handleDeleteCoupon(coupon.id)}
                                        >
                                            Deletes
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
};

export default GiftVoucher;
