import { Product } from '@/types/product';
import React from 'react'

const productData: Product[] = [
    {
        userid: "HD47827",
        name: "Rohit Rana",
        email: "rohit@gmail.com",
        role: "Sales",
        create: "-",
        update: "-",
    },
    {
        userid: "HD47827",
        name: "Rohit Rana",
        email: "rohit@gmail.com",
        role: "Sales",
        create: "-",
        update: "-",
    },
    {
        userid: "HD47827",
        name: "Rohit Rana",
        email: "rohit@gmail.com",
        role: "Sales",
        create: "-",
        update: "-",
    },
    {
        userid: "HD47827",
        name: "Rohit Rana",
        email: "rohit@gmail.com",
        role: "Sales",
        create: "-",
        update: "-",
    },
    {
        userid: "HD47827",
        name: "Rohit Rana",
        email: "rohit@gmail.com",
        role: "Sales",
        create: "-",
        update: "-",
    },
];
const User = () => {
    return (
        <div>
            <table className="w-full border-collapse border border-stroke dark:border-strokedark">
                <thead>
                    <tr className="bg-gray-100 dark:bg-strokedark">
                        <th className="border border-stroke dark:border-strokedark px-4 py-2">User ID</th>
                        <th className="border border-stroke dark:border-strokedark px-4 py-2">Name</th>
                        <th className="border border-stroke dark:border-strokedark px-4 py-2">Email</th>
                        <th className="border border-stroke dark:border-strokedark px-4 py-2">Role</th>
                        <th className="border border-stroke dark:border-strokedark px-4 py-2">Created At</th>
                        {/* <th className="border border-stroke dark:border-strokedark px-4 py-2">Updated At</th> */}
                        <th className="border border-stroke dark:border-strokedark px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {productData.map((product, key) => (
                        <tr key={key} className="hover:bg-gray-50 dark:hover:bg-strokedark">
                            <td className="border border-stroke dark:border-strokedark px-4 py-2">
                                {product.userid}
                            </td>
                            <td className="border border-stroke dark:border-strokedark px-4 py-2">
                                {product.name}
                            </td>
                            <td className="border border-stroke dark:border-strokedark px-4 py-2">
                                {product.email}
                            </td>
                            <td className="border border-stroke dark:border-strokedark px-4 py-2">
                                {product.role}
                            </td>
                            <td className="border border-stroke dark:border-strokedark px-4 py-2">
                                {product.create}
                            </td>
                            {/* <td className="border border-stroke dark:border-strokedark px-4 py-2">
                                {product.update}
                            </td> */}
                            <td className="border space-y-5 border-stroke dark:border-strokedark px-4 py-2 text-center">
                                <button className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default User
