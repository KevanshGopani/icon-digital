"use client"
import Image from "next/image";
import { Product } from "@/types/product";
import SelectGroupOne from "../SelectGroup/SelectGroupOne";
import { useState } from "react";

const productData: Product[] = [
    {
        date: "-",
        orderid: "-",
        userid: "-",
        orderstatus: "-",
        paymentstatus: "-",
        Created: "-",
        Updated: "-",
        totalAmount: "-",
    },
    {
        date: "-",
        orderid: "-",
        userid: "-",
        orderstatus: "-",
        paymentstatus: "-",
        Created: "-",
        Updated: "-",
        totalAmount: "-",
    },
    {
        date: "-",
        orderid: "-",
        userid: "-",
        orderstatus: "-",
        paymentstatus: "-",
        Created: "-",
        Updated: "-",
        totalAmount: "-",
    },
    {
        date: "-",
        orderid: "-",
        userid: "-",
        orderstatus: "-",
        paymentstatus: "-",
        Created: "-",
        Updated: "-",
        totalAmount: "-",
    },

];

const Order = () => {
    const [addform, setAddForm] = useState(false);
    const [editForm, setEditForm] = useState(false);

    const toggleAddForm = () => {
        setAddForm(!addform);
    };

    const toggleEditForm = () => {
        setEditForm(!editForm);
    };
    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-6">
            <h4 className="text-xl font-semibold text-black dark:text-white mb-4">
                All Order List
            </h4>
            <table className="w-full border-collapse border border-stroke dark:border-strokedark">
                <thead>
                    <tr className="bg-gray-100 dark:bg-strokedark">
                        <th className="border border-stroke dark:border-strokedark px-4 py-2">Date</th>
                        <th className="border border-stroke dark:border-strokedark px-4 py-2">Order ID</th>
                        <th className="border border-stroke dark:border-strokedark px-4 py-2">User ID</th>
                        <th className="border border-stroke dark:border-strokedark px-4 py-2">Order Status</th>
                        <th className="border border-stroke dark:border-strokedark px-4 py-2">Payment Status</th>
                        {/* <th className="border border-stroke dark:border-strokedark px-4 py-2">Created At</th>
                        <th className="border border-stroke dark:border-strokedark px-4 py-2">Updated At</th> */}
                        <th className="border border-stroke dark:border-strokedark px-4 py-2">Total Amount</th>
                        <th className="border border-stroke dark:border-strokedark px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {productData.map((product, key) => (
                        <tr key={key} className="hover:bg-gray-50 dark:hover:bg-strokedark">
                            <td className="border border-stroke dark:border-strokedark px-4 py-2">
                                {product.date}
                            </td>
                            <td className="border border-stroke dark:border-strokedark px-4 py-2">
                                {product.orderid}
                            </td>
                            <td className="border border-stroke dark:border-strokedark px-4 py-2">
                                {product.userid}
                            </td>
                            <td className="border border-stroke dark:border-strokedark px-4 py-2">
                                {product.orderstatus}
                            </td>
                            <td className="border border-stroke dark:border-strokedark px-4 py-2">
                                {product.paymentstatus}
                            </td>
                            {/* <td className="border border-stroke dark:border-strokedark px-4 py-2">
                                {product.Created}
                            </td>
                            <td className="border border-stroke dark:border-strokedark px-4 py-2">
                                $ {product.Updated}
                            </td> */}
                            <td className="border border-stroke dark:border-strokedark px-4 py-2">
                                $ {product.totalAmount}
                            </td>
                            <td className="border space-y-5 border-stroke dark:border-strokedark px-4 py-2 text-center">
                                <button
                                    onClick={toggleAddForm}
                                    className="mr-2 rounded bg-green-500 px-3 py-1 text-white hover:bg-green-600">
                                    View
                                </button>
                                {/* <button
                                    onClick={toggleEditForm}
                                    className="mr-2 rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600">
                                    Update
                                </button> */}
                                <button className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Order Details */}
            <div
                className={`fixed top-0 right-0 no-scrollbar overflow-auto z-999 h-full w-[30%] bg-white shadow-lg transition-transform duration-300 dark:bg-boxdark ${addform ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                    <h3 className="font-medium text-black dark:text-white">Product Details</h3>
                    <button
                        onClick={toggleAddForm}
                        className="absolute top-4 right-4 text-gray-500 hover:text-black"
                    >
                        Close
                    </button>
                </div>
                <form action="#">
                    <div className="p-6.5">
                        <div className="w-full mb-4.5">
                            <label className="mb-2 block text-base font-medium text-black dark:text-white">
                                Order ID
                            </label>
                            <p className="text-sm font-medium text-[#5b5a5a]">MCD476289DG</p>
                        </div>
                        <div className="w-full mb-4.5">
                            <label className="mb-2 block text-base font-medium text-black dark:text-white">
                                User ID
                            </label>
                            <p className="text-sm font-medium text-[#5b5a5a]">MCD476289DG</p>
                        </div>
                        <div className="mb-4.5">
                            <label className="mb-2 block text-base font-medium text-black dark:text-white">
                                Items
                            </label>
                            <div className="space-y-3">
                                <div className="flex items-center">
                                    <p className="text-sm font-medium text-[#5b5a5a] w-26">Product ID :-</p>
                                    <p className="text-sm font-medium text-[#5b5a5a]">DM567</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-sm font-medium text-[#5b5a5a] w-26">Quantity</p>
                                    <p className="text-sm font-medium text-[#5b5a5a]">3</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-sm font-medium text-[#5b5a5a] w-26">Price</p>
                                    <p className="text-sm font-medium text-[#5b5a5a]">$465</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mb-4.5">
                            <label className="mb-2 block text-base font-medium text-black dark:text-white">
                                Shipping Address
                            </label>
                            <p className="text-sm font-medium text-[#5b5a5a]">404, radhe row house, surat</p>
                        </div>
                        <div className="w-full mb-4.5">
                            <label className="mb-2 block text-base font-medium text-black dark:text-white">
                                Order Status
                            </label>
                            <p className="text-sm font-medium text-[#5b5a5a]">In Progress </p>
                        </div>
                        <div className="w-full mb-4.5">
                            <label className="mb-2 block text-base font-medium text-black dark:text-white">
                                Payment Status
                            </label>
                            <p className="text-sm font-medium text-[#5b5a5a]">Done</p>
                        </div>
                        <div className="w-full mb-4.5">
                            <label className="mb-2 block text-base font-medium text-black dark:text-white">
                                Total Amount
                            </label>
                            <p className="text-2xl font-semibold text-black-2">$550</p>
                        </div>
                    </div>
                </form>
            </div>


            {/* Edit Form */}
            {/* <div
                className={`fixed top-0 right-0 no-scrollbar overflow-auto z-999 h-full w-[30%] bg-white shadow-lg transition-transform duration-300 dark:bg-boxdark ${editForm ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                    <h3 className="font-medium text-black dark:text-white">Update Order Status</h3>
                    <button
                        onClick={toggleEditForm}
                        className="absolute top-4 right-4 text-gray-500 hover:text-black"
                    >
                        Close
                    </button>
                </div>
                <form action="#">
                    <div className="p-6.5">
                        <div className="w-full mb-4.5">
                            <label className="mb-2 block text-base font-medium text-black dark:text-white">
                                Order ID
                            </label>
                            <p className="text-sm font-medium text-[#5b5a5a]">MCD476289DG</p>
                        </div>
                        <SelectGroupOne />
                        <div className="w-full mb-4.5">
                            <label className="mb-2 block text-base font-medium text-black dark:text-white">
                                Payment Status
                            </label>
                            <p className="text-sm font-medium text-[#5b5a5a]">Done</p>
                        </div>
                    </div>
                </form>
            </div> */}
        </div>
    );
};

export default Order;
