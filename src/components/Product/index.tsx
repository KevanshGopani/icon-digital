"use client"
import Image from "next/image";
import { Product } from "@/types/product";
import SelectGroupOne from "../SelectGroup/SelectGroupOne";
import { useState } from "react";
import Switch from "../common/Switch/page";
import ActionModel from "../common/ActionModel/page";

const productData: Product[] = [
    {
        image: "/images/product/product-01.png",
        name: "Apple Watch Series 7",
        price: 296,
    },
    {
        image: "/images/product/product-01.png",
        name: "Apple Watch Series 7",
        price: 296,
    },
    {
        image: "/images/product/product-01.png",
        name: "Apple Watch Series 7",
        price: 296,
    },
    {
        image: "/images/product/product-01.png",
        name: "Apple Watch Series 7",
        price: 296,
    },
    {
        image: "/images/product/product-01.png",
        name: "Apple Watch Series 7",
        price: 296,
    },
    {
        image: "/images/product/product-01.png",
        name: "Apple Watch Series 7",
        price: 296,
    },
];

const category: Product[] = [
    {
        value: "PRINTER",
        title: "PRINTER",
    },
    {
        value: "MONITOR",
        title: "MONITOR",
    },
    {
        value: "ALL_IN_ONE",
        title: "ALL_IN_ONE",
    },
    {
        value: "DESKTOP",
        title: "DESKTOP",
    },
    {
        value: "CUSTOM_PC",
        title: "CUSTOM_PC",
    },
    {
        value: "ACCESSORY",
        title: "ACCESSORY",
    },
]

const Products = () => {
    const [addform, setAddForm] = useState(false);
    const [editForm, setEditForm] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [images, setImages] = useState([]);
    const [selectedProduct1, setSelectedProduct1] = useState(null);
    const [isOpen1, setIsOpen1] = useState(false);

    // Handle image selection
    const handleImageUpload = (event) => {
        const files = event.target.files;
        if (files) {
            const newImages = [...images];

            for (let i = 0; i < files.length; i++) {
                if (files[i].type.startsWith("image/")) {
                    const imageUrl = URL.createObjectURL(files[i]);
                    newImages.push(imageUrl);
                }
            }

            setImages(newImages);
        }
    };

    const removeImage = (index) => {
        setImages(images.filter((_, i) => i !== index));
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleOpenModal1 = () => {
        setIsModalOpen1(true);
    };

    const handleCloseModal1 = () => {
        setIsModalOpen1(false);
    };


    const toggleAddForm = () => {
        setAddForm(!addform);
    };

    const toggleEditForm = () => {
        setEditForm(!editForm);
    };

    // re-arrange field

    return (
        <div className="rounded-sm border h-[100vh] border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-6">
            <div className="flex justify-between mb-4">
                <h4 className="text-xl font-semibold text-black dark:text-white">
                    All Products List
                </h4>
                <button className="p-2 px-7 bg-[#000] rounded-lg text-[#fff]"
                    onClick={toggleAddForm}
                >
                    + Add New Product
                </button>
            </div>
            <div className="grid grid-cols-5 gap-x-5 pt-3">
                <div className="col-span-1 items-center gap-x-5 pb-6">
                    <p className="text-[#000] col-span-1 font-medium text-base block w-full border-b border-[#828282a3] pb-2">Category</p>
                    <div className="grid gap-3 mt-5 h-[78vh] overflow-auto">
                        <p className="cursor-pointer text-[#000]">Laptop</p>
                        <p className="cursor-pointer text-[#000]">Laptop</p>
                        <p className="cursor-pointer text-[#000]">Laptop</p>
                        <p className="cursor-pointer text-[#000]">Laptop</p>
                        <p className="cursor-pointer text-[#000]">Laptop</p>
                        <p className="cursor-pointer text-[#000]">Laptop</p>
                        <p className="cursor-pointer text-[#000]">Laptop</p>
                        <p className="cursor-pointer text-[#000]">Laptop</p>
                        <p className="cursor-pointer text-[#000]">Laptop</p>
                        <p className="cursor-pointer text-[#000]">Laptop</p>
                        <p className="cursor-pointer text-[#000]">Laptop</p>
                        <p className="cursor-pointer text-[#000]">Laptop</p>
                        <p className="cursor-pointer text-[#000]">Laptop</p>
                        <p className="cursor-pointer text-[#000]">Laptop</p>
                        <p className="cursor-pointer text-[#000]">Laptop</p>
                        <p className="cursor-pointer text-[#000]">Laptop</p>
                        <p className="cursor-pointer text-[#000]">Laptop</p>
                        <p className="cursor-pointer text-[#000]">Laptop</p>
                        <p className="cursor-pointer text-[#000]">Laptop</p>
                        <p className="cursor-pointer text-[#000]">Laptop</p>
                        <p className="cursor-pointer text-[#000]">Laptop</p>
                        <p className="cursor-pointer text-[#000]">Laptop</p>
                        <p className="cursor-pointer text-[#000]">Laptop</p>
                        <p className="cursor-pointer text-[#000]">Laptop</p>
                        <p className="cursor-pointer text-[#000]">Laptop</p>
                        <p className="cursor-pointer text-[#000]">Laptop</p>
                        <p className="cursor-pointer text-[#000]">Laptop</p>
                        <p className="cursor-pointer text-[#000]">Laptop</p>
                    </div>
                </div>
                <div className="bg-white col-span-4 h-[80vh] overflow-auto flex flex-col gap-y-3">
                    <div className="flex justify-between border-b pb-2 border-[#828282a3] sticky top-0 bg-white w-full z-50">
                        <p className="text-[#343333] font-bold">Laptop</p>
                    </div>
                    <table className="w-full">
                        {/* Table Head */}
                        <thead>
                            <tr className="">
                                <th className="p-3 text-left text-[#343333] font-medium">Product</th>
                                <th className="p-3 text-left text-[#343333] font-medium">Price</th>
                                <th className="p-3 text-left text-[#343333] font-medium">Stock</th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody>
                            {productData.map((item, i) => (
                                <tr key={i} className="">
                                    {/* Product Column */}
                                    <td className="p-3 flex items-center gap-4">
                                        <Image
                                            src={item?.image}
                                            alt="product image"
                                            height={100}
                                            width={100}
                                            className="h-[70px] w-[70px] object-cover"
                                        />
                                        <p className="text-[#000] font-bold text-base w-[200px]">{item?.name}</p>
                                    </td>

                                    {/* Price Column */}
                                    <td className="p-3 text-[#292929] font-bold text-lg">
                                        ₹{item?.price}
                                    </td>

                                    {/* Stock Column */}
                                    <td className="p-3">
                                        <Switch />
                                    </td>

                                    {/* Actions Column */}
                                    <td className="p-3 relative">
                                        <ActionModel toggleEditForm={toggleEditForm} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add Form */}
            <div className={`${addform ? "bg-[#0000007d] h-full transition-all duration-400 w-full absolute top-0 right-0 z-99" : ""}`}>
                <div
                    className={`fixed top-0 right-0 no-scrollbar overflow-auto z-99 h-full w-[30%] bg-white shadow-lg transition-transform duration-300 dark:bg-boxdark ${addform ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                        <h3 className="font-medium text-black dark:text-white">Add Product Form</h3>
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
                                <div className="flex justify-between items-center">
                                    <label className=" block text-sm font-medium text-black dark:text-white">
                                        Product Name
                                    </label>
                                    <p className="text-lg cursor-pointer">
                                        =
                                    </p>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Enter your product name"
                                    className="w-full mt-3 rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                />
                            </div>

                            {/* <div className="mb-4.5">
                                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                    Product Category
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your Category"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                />
                            </div> */}

                            <div className="mb-4.5">
                                <div className="flex justify-between items-center">
                                    <label className=" block text-sm font-medium text-black dark:text-white">
                                        Product Category
                                    </label>
                                    <p className="text-lg cursor-pointer">
                                        =
                                    </p>
                                </div>

                                <div className="relative w-full mt-3">
                                    <button
                                        onClick={() => setIsOpen(!isOpen)}
                                        className="w-full flex justify-between items-center rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    >
                                        {selectedProduct?.title || "Select Product Type"}
                                        <span>▼</span>
                                    </button>

                                    {isOpen && (
                                        <div className="absolute left-0 w-full mt-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 shadow-lg rounded-md z-10">

                                            {/* Add Custom Type Button */}
                                            <button
                                                onClick={() => {
                                                    console.log("Open Modal or Input Field");
                                                    setIsOpen(false);
                                                    handleOpenModal();
                                                }}
                                                className="w-full text-left px-4 py-2 bg-primary text-white hover:bg-primary-dark transition"
                                            >
                                                + Add Custom Product Type
                                            </button>

                                            {/* Default Option */}
                                            <div
                                                className="px-4 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
                                                onClick={() => {
                                                    setSelectedProduct(null);
                                                    setIsOpen(false);
                                                }}
                                            >
                                                Select Product Type
                                            </div>

                                            {/* Dynamic Options with Delete Button */}
                                            {category.map((item, i) => (
                                                <div
                                                    key={i}
                                                    className="flex justify-between items-center px-4 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
                                                >
                                                    <span onClick={() => {
                                                        setSelectedProduct(item);
                                                        setIsOpen(false);
                                                    }}>
                                                        {item?.title}
                                                    </span>

                                                    {/* Delete Button */}
                                                    <button
                                                        className="ml-2"
                                                    >
                                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path></svg>
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                            </div>

                            <div className="w-full mb-4.5">
                                <div className="flex justify-between items-center">
                                    <label className=" block text-sm font-medium text-black dark:text-white">
                                        Product Media
                                    </label>
                                    <p className="text-lg cursor-pointer">
                                        =
                                    </p>
                                </div>


                                <div className="flex flex-wrap gap-4 mt-3">
                                    {/* Display selected images */}
                                    {images.map((imgSrc, index) => (
                                        <div key={index} className="relative h-[80px] w-[80px] rounded-md flex items-center justify-center border border-[#b9b9b9]">
                                            <Image src={imgSrc} alt={`uploaded-${index}`} width={80} height={80} className="object-cover h-[80px] w-[80px]" />
                                            <button
                                                className="absolute -top-1.5 -right-1.5 w-6 h-6 bg-black text-white rounded-full p-1 text-xs hover:bg-red-500"
                                                onClick={() => removeImage(index)}
                                            >
                                                X
                                            </button>
                                        </div>
                                    ))}

                                    {/* Upload Box */}
                                    <label className="h-[80px] w-[100px] rounded-md flex items-center justify-center border border-[#b9b9b9] cursor-pointer">
                                        <div className="space-y-1.5">
                                            <input type="file" accept="image/*" multiple className="hidden" onChange={handleImageUpload} />
                                            <div className="flex justify-center">
                                                <Image src="/images/upload-image.svg" alt="upload-image" height={20} width={20} />
                                            </div>
                                            <p className="text-black text-xs">Upload Image</p>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div className="mb-4.5">
                                <div className="flex justify-between items-center">
                                    <label className=" block text-sm font-medium text-black dark:text-white">
                                        Product Brand
                                    </label>
                                    <p className="text-lg cursor-pointer">
                                        =
                                    </p>
                                </div>

                                <div className="relative w-full mt-3">
                                    <button
                                        onClick={() => setIsOpen1(!isOpen)}
                                        className="w-full flex justify-between items-center rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    >
                                        {selectedProduct1?.title || "Select Product Brand"}
                                        <span>▼</span>
                                    </button>

                                    {isOpen1 && (
                                        <div className="absolute left-0 w-full mt-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 shadow-lg rounded-md z-10">

                                            {/* Add Custom Type Button */}
                                            <button
                                                onClick={() => {
                                                    console.log("Open Modal or Input Field");
                                                    setIsOpen1(false);
                                                    handleOpenModal1(true);
                                                }}
                                                className="w-full text-left px-4 py-2 bg-primary text-white hover:bg-primary-dark transition"
                                            >
                                                + Add Custom Product Brand
                                            </button>
                                            {/* Default Option */}
                                            <div
                                                className="px-4 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
                                                onClick={() => {
                                                    setSelectedProduct1(null);
                                                    setIsOpen1(false);
                                                }}
                                            >
                                                Select Product Brand
                                            </div>

                                            {/* Dynamic Options */}
                                            {category.map((item, i) => (
                                                <div
                                                    key={i}
                                                    className="px-4 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
                                                    onClick={() => {
                                                        setSelectedProduct1(item);
                                                        setIsOpen1(false);
                                                    }}
                                                >
                                                    {item?.title}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="mb-4.5">
                                <div className="flex justify-between items-center">
                                    <label className=" block text-sm font-medium text-black dark:text-white">
                                        Price
                                    </label>
                                    <p className="text-lg cursor-pointer">
                                        =
                                    </p>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Enter your price"
                                    className="w-full mt-3 rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                />
                            </div>

                            <div className="mb-4.5">
                                <div className="flex justify-between items-center">
                                    <label className=" block text-sm font-medium text-black dark:text-white">
                                        Discount Price
                                    </label>
                                    <p className="text-lg cursor-pointer">
                                        =
                                    </p>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Enter your discount price"
                                    className="w-full mt-3 rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                />
                            </div>

                            <div className="mb-4.5">
                                <div className="flex justify-between items-center">
                                    <label className=" block text-sm font-medium text-black dark:text-white">
                                        HSN Code
                                    </label>
                                    <p className="text-lg cursor-pointer">
                                        =
                                    </p>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Enter your HSN code"
                                    className="w-full mt-3 rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                />
                            </div>

                            <div className="mb-4.5">
                                <div className="flex justify-between items-center">
                                    <label className=" block text-sm font-medium text-black dark:text-white">
                                        GST Rate
                                    </label>
                                    <p className="text-lg cursor-pointer">
                                        =
                                    </p>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Enter your GST rate"
                                    className="w-full mt-3 rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                />
                            </div>

                            <div className="mb-6">
                                <div className="flex justify-between items-center">
                                    <label className=" block text-sm font-medium text-black dark:text-white">
                                        Description
                                    </label>
                                    <p className="text-lg cursor-pointer">
                                        =
                                    </p>
                                </div>
                                <textarea
                                    rows={6}
                                    placeholder="Type your message"
                                    className="w-full mt-3 rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                ></textarea>
                            </div>

                            <div>
                                <div className="flex justify-between items-center">
                                    <label className=" block text-sm font-medium text-black dark:text-white">
                                        Stock
                                    </label>
                                    <p className="text-lg cursor-pointer">
                                        =
                                    </p>
                                </div>
                                <div className="relative mt-3 z-20 inline-block border border-stroke w-full">
                                    <select
                                        name="#"
                                        id="#"
                                        className="relative z-20 inline-flex appearance-none bg-transparent py-3 pl-3 pr-8 w-full text-sm font-medium outline-none"
                                    >
                                        <option value="" className="dark:bg-boxdark">
                                            in stock
                                        </option>
                                        <option value="" className="dark:bg-boxdark">
                                            Out of stock
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

                            <button className="flex w-full mt-10 justify-center rounded-md bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                                Add Product
                            </button>
                        </div>
                    </form>
                </div >
            </div>

            {/* Edit Form */}
            <div className={`${editForm ? "bg-[#0000007d] h-full transition-all duration-400 w-full absolute top-0 right-0 z-99" : ""}`}>
                <div
                    className={`fixed top-0 right-0 no-scrollbar overflow-auto z-99 h-full w-[30%] bg-white shadow-lg transition-transform duration-300 dark:bg-boxdark ${editForm ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                        <h3 className="font-medium text-black dark:text-white">Edit Product Form</h3>
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
                                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                    Product Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your product name"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                />
                            </div>

                            <div className="mb-4.5">
                                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                    Product Category
                                </label>

                                <div className="relative w-full">
                                    <button
                                        onClick={() => setIsOpen(!isOpen)}
                                        className="w-full flex justify-between items-center rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    >
                                        {selectedProduct?.title || "Select Product Type"}
                                        <span>▼</span>
                                    </button>

                                    {isOpen && (
                                        <div className="absolute left-0 w-full mt-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 shadow-lg rounded-md z-10">

                                            {/* Add Custom Type Button */}
                                            <button
                                                onClick={() => {
                                                    console.log("Open Modal or Input Field");
                                                    setIsOpen(false);
                                                    handleOpenModal(true);
                                                }}
                                                className="w-full text-left px-4 py-2 bg-primary text-white hover:bg-primary-dark transition"
                                            >
                                                + Add Custom Product Type
                                            </button>
                                            {/* Default Option */}
                                            <div
                                                className="px-4 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
                                                onClick={() => {
                                                    setSelectedProduct(null);
                                                    setIsOpen(false);
                                                }}
                                            >
                                                Select Product Type
                                            </div>

                                            {/* Dynamic Options */}
                                            {category.map((item, i) => (
                                                <div
                                                    key={i}
                                                    className="px-4 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
                                                    onClick={() => {
                                                        setSelectedProduct(item);
                                                        setIsOpen(false);
                                                    }}
                                                >
                                                    {item?.title}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="w-full mb-4.5">
                                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                    Product Media
                                </label>

                                <div className="flex flex-wrap gap-4">
                                    {/* Display selected images */}
                                    {images.map((imgSrc, index) => (
                                        <div key={index} className="relative h-[80px] w-[80px] rounded-md flex items-center justify-center border border-[#b9b9b9]">
                                            <Image src={imgSrc} alt={`uploaded-${index}`} width={80} height={80} className="object-cover h-[80px] w-[80px]" />
                                            <button
                                                className="absolute -top-1.5 -right-1.5 w-6 h-6 bg-black text-white rounded-full p-1 text-xs hover:bg-red-500"
                                                onClick={() => removeImage(index)}
                                            >
                                                X
                                            </button>
                                        </div>
                                    ))}

                                    {/* Upload Box */}
                                    <label className="h-[80px] w-[100px] rounded-md flex items-center justify-center border border-[#b9b9b9] cursor-pointer">
                                        <div className="space-y-1.5">
                                            <input type="file" accept="image/*" multiple className="hidden" onChange={handleImageUpload} />
                                            <div className="flex justify-center">
                                                <Image src="/images/upload-image.svg" alt="upload-image" height={20} width={20} />
                                            </div>
                                            <p className="text-black text-xs">Upload Image</p>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div className="mb-4.5">
                                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                    Product Brand
                                </label>

                                <div className="relative w-full">
                                    <button
                                        onClick={() => setIsOpen1(!isOpen)}
                                        className="w-full flex justify-between items-center rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    >
                                        {selectedProduct1?.title || "Select Product Brand"}
                                        <span>▼</span>
                                    </button>

                                    {isOpen1 && (
                                        <div className="absolute left-0 w-full mt-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 shadow-lg rounded-md z-10">

                                            {/* Add Custom Type Button */}
                                            <button
                                                onClick={() => {
                                                    console.log("Open Modal or Input Field");
                                                    setIsOpen1(false);
                                                    handleOpenModal1(true);
                                                }}
                                                className="w-full text-left px-4 py-2 bg-primary text-white hover:bg-primary-dark transition"
                                            >
                                                + Add Custom Product Brand
                                            </button>
                                            {/* Default Option */}
                                            <div
                                                className="px-4 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
                                                onClick={() => {
                                                    setSelectedProduct1(null);
                                                    setIsOpen1(false);
                                                }}
                                            >
                                                Select Product Brand
                                            </div>

                                            {/* Dynamic Options */}
                                            {category.map((item, i) => (
                                                <div
                                                    key={i}
                                                    className="px-4 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
                                                    onClick={() => {
                                                        setSelectedProduct1(item);
                                                        setIsOpen1(false);
                                                    }}
                                                >
                                                    {item?.title}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="mb-4.5">
                                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                    Price
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your price"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                />
                            </div>

                            <div className="mb-4.5">
                                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                    Discount Price
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your discount price"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                />
                            </div>

                            <div className="mb-4.5">
                                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                    GST Number
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your GST number"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                />
                            </div>

                            <div className="mb-6">
                                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                    Description
                                </label>
                                <textarea
                                    rows={6}
                                    placeholder="Type your message"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                ></textarea>
                            </div>

                            <div className="relative z-20 inline-block border border-stroke w-full">
                                <select
                                    name="#"
                                    id="#"
                                    className="relative z-20 inline-flex appearance-none bg-transparent py-3 pl-3 pr-8 w-full text-sm font-medium outline-none"
                                >
                                    <option value="" className="dark:bg-boxdark">
                                        in stock
                                    </option>
                                    <option value="" className="dark:bg-boxdark">
                                        Out of stock
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

                            <button className="flex w-full mt-10 justify-center rounded-md bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                                Edit Product
                            </button>
                        </div>
                    </form>
                </div >
            </div>

            {/* add category model */}
            <div className="flex items-center absolute justify-center z-999">
                {/* Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-[#00000062] bg-opacity-30">
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm max-h-ful w-full">
                            <h2 className="text-xl font-semibold mb-4 text-[#000]">Enter Product type</h2>
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                className="w-full p-2 border text-[#000] border-gray-300 rounded-md mb-4"
                                placeholder="Type something..."
                            />
                            <div className="flex justify-end gap-4">
                                {/* Submit button */}
                                <button
                                    className="bg-blue-500 text-white py-2 px-4 rounded-md"
                                >
                                    Add
                                </button>
                                {/* Cancel button */}
                                <button
                                    onClick={handleCloseModal}
                                    className="bg-gray-500 text-white py-2 px-4 rounded-md"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* add Brand model */}
            <div className="flex items-center absolute justify-center z-999">
                {/* Modal */}
                {isModalOpen1 && (
                    <div className="fixed inset-0 flex items-center justify-center bg-[#00000062] bg-opacity-30">
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm max-h-ful w-full">
                            <h2 className="text-xl font-semibold mb-4 text-[#000]">Enter Product Brand</h2>
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                className="w-full p-2 border text-[#000] border-gray-300 rounded-md mb-4"
                                placeholder="Type something..."
                            />
                            <div className="flex justify-end gap-4">
                                {/* Submit button */}
                                <button
                                    className="bg-blue-500 text-white py-2 px-4 rounded-md"
                                >
                                    Add
                                </button>
                                {/* Cancel button */}
                                <button
                                    onClick={handleCloseModal1}
                                    className="bg-gray-500 text-white py-2 px-4 rounded-md"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div >
    );
};

export default Products;
