"use client";
import Image from "next/image";
import { Product } from "@/types/product";
import SelectGroupOne from "../SelectGroup/SelectGroupOne";
import { useState } from "react";

const productData: Product[] = [
  {
    orderid: "-",
    userid: "-",
    orderstatus: "-",
    paymentstatus: "-",
    Created: "-",
    Updated: "-",
    totalAmount: "-",
  },
  {
    orderid: "-",
    userid: "-",
    orderstatus: "-",
    paymentstatus: "-",
    Created: "-",
    Updated: "-",
    totalAmount: "-",
  },
  {
    orderid: "-",
    userid: "-",
    orderstatus: "-",
    paymentstatus: "-",
    Created: "-",
    Updated: "-",
    totalAmount: "-",
  },
  {
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
    <div className="rounded-sm border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark">
      <h4 className="mb-4 text-xl font-semibold text-black dark:text-white">
        All Order List
      </h4>
      <table className="w-full border-collapse border border-stroke dark:border-strokedark">
        <thead>
          <tr className="bg-gray-100 dark:bg-strokedark">
            <th className="border border-stroke px-4 py-2 dark:border-strokedark">
              Order Status
            </th>
            <th className="border border-stroke px-4 py-2 dark:border-strokedark">
              Payment Status
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
          {productData.map((product, key) => (
            <tr key={key} className="hover:bg-gray-50 dark:hover:bg-strokedark">
              <td className="border border-stroke px-4 py-2 dark:border-strokedark">
                {product.orderstatus}
              </td>
              <td className="border border-stroke px-4 py-2 dark:border-strokedark">
                {product.paymentstatus}
              </td>

              <td className="border border-stroke px-4 py-2 dark:border-strokedark">
                $ {product.totalAmount}
              </td>
              <td className="space-y-5 border border-stroke px-4 py-2 text-center dark:border-strokedark">
                <button
                  onClick={toggleAddForm}
                  className="mr-2 rounded bg-green-500 px-3 py-1 text-white hover:bg-green-600"
                >
                  View
                </button>

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
        className={`no-scrollbar fixed right-0 top-0 z-999 h-full w-[30%] overflow-auto bg-white shadow-lg transition-transform duration-300 dark:bg-boxdark ${
          addform ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Product Details
          </h3>
          <button
            onClick={toggleAddForm}
            className="absolute right-4 top-4 text-gray-500 hover:text-black"
          >
            Close
          </button>
        </div>
        <form action="#">
          <div className="p-6.5">
            <div className="mb-4.5 w-full">
              <label className="mb-2 block text-base font-medium text-black dark:text-white">
                Order ID
              </label>
              <p className="text-sm font-medium text-[#5b5a5a]">MCD476289DG</p>
            </div>
            <div className="mb-4.5 w-full">
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
                  <p className="w-26 text-sm font-medium text-[#5b5a5a]">
                    Product ID :-
                  </p>
                  <p className="text-sm font-medium text-[#5b5a5a]">DM567</p>
                </div>
                <div className="flex items-center">
                  <p className="w-26 text-sm font-medium text-[#5b5a5a]">
                    Quantity
                  </p>
                  <p className="text-sm font-medium text-[#5b5a5a]">3</p>
                </div>
                <div className="flex items-center">
                  <p className="w-26 text-sm font-medium text-[#5b5a5a]">
                    Price
                  </p>
                  <p className="text-sm font-medium text-[#5b5a5a]">$465</p>
                </div>
              </div>
            </div>
            <div className="mb-4.5 w-full">
              <label className="mb-2 block text-base font-medium text-black dark:text-white">
                Shipping Address
              </label>
              <p className="text-sm font-medium text-[#5b5a5a]">
                404, radhe row house, surat
              </p>
            </div>
            <div className="mb-4.5 w-full">
              <label className="mb-2 block text-base font-medium text-black dark:text-white">
                Order Status
              </label>
              <p className="text-sm font-medium text-[#5b5a5a]">In Progress </p>
            </div>
            <div className="mb-4.5 w-full">
              <label className="mb-2 block text-base font-medium text-black dark:text-white">
                Payment Status
              </label>
              <p className="text-sm font-medium text-[#5b5a5a]">Done</p>
            </div>
            <div className="mb-4.5 w-full">
              <label className="mb-2 block text-base font-medium text-black dark:text-white">
                Total Amount
              </label>
              <p className="text-2xl font-semibold text-black-2">$550</p>
            </div>
          </div>
        </form>
      </div>

      {/* Edit Form */}
      <div
        className={`no-scrollbar fixed right-0 top-0 z-999 h-full w-[30%] overflow-auto bg-white shadow-lg transition-transform duration-300 dark:bg-boxdark ${
          editForm ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Update Order Status
          </h3>
          <button
            onClick={toggleEditForm}
            className="absolute right-4 top-4 text-gray-500 hover:text-black"
          >
            Close
          </button>
        </div>
        <form action="#">
          <div className="p-6.5">
            <div className="mb-4.5 w-full">
              <label className="mb-2 block text-base font-medium text-black dark:text-white">
                Order ID
              </label>
              <p className="text-sm font-medium text-[#5b5a5a]">MCD476289DG</p>
            </div>
            <SelectGroupOne />
            <div className="mb-4.5 w-full">
              <label className="mb-2 block text-base font-medium text-black dark:text-white">
                Payment Status
              </label>
              <p className="text-sm font-medium text-[#5b5a5a]">Done</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Order;
