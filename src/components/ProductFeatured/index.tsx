"use client"
import { Product } from "@/types/product";
import { useState } from "react";

const productData: Product[] = [
    {
        image: "/images/product/product-01.png",
        name: "Apple Watch Series 7",
        productdesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        category: "Electronics",
        stock: 30,
        price: 296,
        SalePrice: 400,
        Brand: "HP",
        Type: "S45",
        productID: "HD36728"
    },
    {
        image: "/images/product/product-02.png",
        name: "Macbook Pro M1",
        productdesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        category: "Electronics",
        price: 546,
        stock: 30,
        SalePrice: 400,
        Brand: "HP",
        Type: "S45",
        productID: "HD36728"
    },
    {
        image: "/images/product/product-03.png",
        name: "Dell Inspiron 15",
        productdesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        category: "Electronics",
        price: 443,
        stock: 30,
        SalePrice: 400,
        Brand: "HP",
        Type: "S45",
        productID: "HD36728"
    },
    {
        image: "/images/product/product-04.png",
        name: "HP Probook 450",
        productdesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        category: "Electronics",
        price: 499,
        SalePrice: 400,
        stock: 30,
        Brand: "HP",
        Type: "S45",
        productID: "HD36728"
    },
];

const ProductsFeatured = () => {
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
                View Featured Products
            </h4>
            <table className="w-full border-collapse border border-stroke dark:border-strokedark">
                <thead>
                    <tr className="bg-gray-100 dark:bg-strokedark">
                        <th className="border border-stroke dark:border-strokedark px-4 py-2">Product ID</th>
                        <th className="border border-stroke dark:border-strokedark px-4 py-2">Name</th>
                        <th className="border border-stroke dark:border-strokedark px-4 py-2">Description</th>
                        <th className="border border-stroke dark:border-strokedark px-4 py-2">Category</th>
                        <th className="border border-stroke dark:border-strokedark px-4 py-2">Stock</th>
                        <th className="border border-stroke dark:border-strokedark px-4 py-2">Price</th>
                        <th className="border border-stroke dark:border-strokedark px-4 py-2">Sale Price</th>
                        <th className="border border-stroke dark:border-strokedark px-4 py-2">Brand</th>
                        <th className="border border-stroke dark:border-strokedark px-4 py-2">Type</th>
                    </tr>
                </thead>
                <tbody>
                    {productData.map((product, key) => (
                        <tr key={key} className="hover:bg-gray-50 dark:hover:bg-strokedark">
                            <td className="border border-stroke dark:border-strokedark px-4 py-2">
                                {product.productID}
                            </td>
                            <td className="border border-stroke dark:border-strokedark px-4 py-2">
                                {product.name}
                            </td>
                            <td className="border border-stroke dark:border-strokedark px-4 py-2">
                                {product.productdesc}
                            </td>
                            <td className="border border-stroke dark:border-strokedark px-4 py-2">
                                {product.category}
                            </td>
                            <td className="border border-stroke dark:border-strokedark px-4 py-2">
                                {product.stock}
                            </td>
                            <td className="border border-stroke dark:border-strokedark px-4 py-2">
                                ${product.price}
                            </td>
                            <td className="border border-stroke dark:border-strokedark px-4 py-2">
                                ${product.SalePrice}
                            </td>
                            <td className="border border-stroke dark:border-strokedark px-4 py-2">
                                {product.Brand}
                            </td>
                            <td className="border border-stroke dark:border-strokedark px-4 py-2">
                                {product.Type}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductsFeatured;
