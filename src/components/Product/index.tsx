"use client";
import Image from "next/image";
import { useState } from "react";
import Switch from "../common/Switch/page";
import ActionModel from "../common/ActionModel/page";
import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "@/services/categories";
import { getAllProducts, updateProduct } from "@/services/products";
import Loader from "../common/Loader";

const Products = () => {
  const [addform, setAddForm] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [images, setImages] = useState([]);
  const [selectedProduct1, setSelectedProduct1] = useState(null);
  const [isOpen1, setIsOpen1] = useState(false);

  // Handle image selection
  const handleImageUpload = (event: any) => {
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

  const removeImage = (index: any) => {
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



  // re-arrange field

  const [allCategories, setAllCategories] = useState<any>([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState<any>(null);

  const {
    data: categories,
    error: allCategoriesProblemOccurred,
    isLoading: allCategoriesLoading,
  } = useQuery({
    queryKey: ["all-categories"],
    queryFn: async () => {
      const response = await getAllCategories();

      const filterCategories = response?.data?.map((item: any) => ({
        title: item?.name,
        value: item.name,
      }));
      setSelectedCategory(filterCategories?.[0]?.title);
      setAllCategories(filterCategories);
      return response?.data;
    },
    retry: false,
  });

  const {
    data: allProducts,
    error: allProductsProblemOccurred,
    isLoading: allProductsLoading,
    refetch: refetchProducts
  } = useQuery({
    queryKey: ["all-products"],
    queryFn: async () => {
      const response = await getAllProducts();
      return response?.data;
    },
    retry: false,
  });

  const handleSelectedProducts = (selectedProductName: string) => {
    setSelectedCategory(selectedProductName);
    const selectedProducts = allProducts?.filter(
      (product: any) => product?.category?.name === selectedProductName,
    );
    setFilterProducts(selectedProducts);
  };

  if (allCategoriesLoading || allProductsLoading) {
    return <Loader />;
  }

  console.log({ allCategories, categories, filterProducts });

  const toggleEditForm = (product?: any) => {
    setEditForm(!editForm);
    if (product) {
      setSelectedProduct(product);
      setImages(product?.images || []);
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setSelectedProduct((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleUpdateProduct = async (e: any) => {
    e.preventDefault();
  
    if (!selectedProduct?.id) {
      alert("No product selected for update.");
      return;
    }
  
    try {
      const updatedProduct = { ...selectedProduct, images };
  
      const response = await updateProduct(updatedProduct, selectedProduct.id);
  
      if (response.success) {
        alert("Product updated successfully!");
        setEditForm(false);
        refetchProducts(); // If using react-query, re-fetch the product list
      } else {
        alert(`Failed to update product: ${response.errors.message}`);
      }
    } catch (error) {
      console.error("Update error:", error);
      alert("Something went wrong.");
    }
  };
  

  return (
    <div className="h-[100vh] rounded-sm border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="mb-4 flex justify-between">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          All Products List
        </h4>
        <button
          className="rounded-lg bg-[#000] p-2 px-7 text-[#fff]"
          onClick={toggleAddForm}
        >
          + Add New Product
        </button>
      </div>
      <div className="grid grid-cols-5 gap-x-5 pt-3">
        <div className="col-span-1 items-center gap-x-5 pb-6">
          <p className="col-span-1 block w-full border-b border-[#828282a3] pb-2 text-base font-medium text-[#000]">
            Category
          </p>
          <div className="mt-5 grid h-[78vh] gap-3 overflow-auto">
            {allCategories?.map((item: any, i) => {
              return (
                <p
                  className="cursor-pointer text-[#000]"
                  onClick={() => {
                    handleSelectedProducts(item?.title);
                  }}
                >
                  {item?.title}
                </p>
              );
            })}
          </div>
        </div>
        <div className="col-span-4 flex h-[80vh] flex-col gap-y-3 overflow-auto bg-white">
          <div className="sticky top-0 z-50 flex w-full justify-between border-b border-[#828282a3] bg-white pb-2">
            <p className="font-bold text-[#343333]">{selectedCategory}</p>
          </div>
          <table className="w-full">
            {/* Table Head */}
            <thead>
              <tr className="">
                <th className="p-3 text-left font-medium text-[#343333]">
                  Product
                </th>
                <th className="p-3 text-left font-medium text-[#343333]">
                  Price
                </th>
                <th className="p-3 text-left font-medium text-[#343333]">
                  Stock
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="w-full">
              {filterProducts?.length ? (
                filterProducts?.map((item: any, i) => {
                  return (
                    <tr key={i} className="">
                      {/* Product Column */}
                      <td className="flex items-center gap-4 p-3">
                        <Image
                          src={
                            item?.images?.[0] || "/images/product/no-image.jpg"
                          }
                          alt="product image"
                          height={100}
                          width={100}
                          className="h-[70px] w-[70px] rounded-xl object-contain"
                        />
                        <p className="w-[200px] text-base font-bold text-[#000]">
                          {item?.name}
                        </p>
                      </td>

                      {/* Price Column */}
                      <td className="p-3 text-lg font-bold text-[#292929]">
                        ₹{item?.price}
                      </td>

                      {/* Stock Column */}
                      <td className="p-3">
                        <Switch />
                      </td>

                      {/* Actions Column */}
                      <td className="relative p-3">
                        <ActionModel toggleEditForm={toggleEditForm} />
                      </td>
                    </tr>
                  );
                })
              ) : (
                <p className="mt-5 text-center text-2xl font-semibold">
                  No product found
                </p>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Form */}
      <div
        className={`${addform ? "duration-400 absolute right-0 top-0 z-99 h-full w-full bg-[#0000007d] transition-all" : ""}`}
      >
        <div
          className={`no-scrollbar fixed right-0 top-0 z-99 h-full w-[30%] overflow-auto bg-white shadow-lg transition-transform duration-300 dark:bg-boxdark ${
            addform ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Add Product Form
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
                <div className="flex items-center justify-between">
                  <label className=" block text-sm font-medium text-black dark:text-white">
                    Product Name
                  </label>
                  <p className="cursor-pointer text-lg">=</p>
                </div>
                <input
                  type="text"
                  placeholder="Enter your product name"
                  className="mt-3 w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
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
                <div className="flex items-center justify-between">
                  <label className=" block text-sm font-medium text-black dark:text-white">
                    Product Category
                  </label>
                  <p className="cursor-pointer text-lg">=</p>
                </div>

                <div className="relative mt-3 w-full">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex w-full items-center justify-between rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  >
                    {selectedProduct?.title || "Select Product Type"}
                    <span>▼</span>
                  </button>

                  {isOpen && (
                    <div className="absolute left-0 z-10 mt-2 w-full rounded-md border border-gray-300 bg-white shadow-lg dark:border-gray-600 dark:bg-gray-800">
                      {/* Add Custom Type Button */}
                      <button
                        onClick={() => {
                          console.log("Open Modal or Input Field");
                          setIsOpen(false);
                          handleOpenModal();
                        }}
                        className="hover:bg-primary-dark w-full bg-primary px-4 py-2 text-left text-white transition"
                      >
                        + Add Custom Product Type
                      </button>

                      {/* Default Option */}
                      <div
                        className="cursor-pointer px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                        onClick={() => {
                          setSelectedProduct(null);
                          setIsOpen(false);
                        }}
                      >
                        Select Product Type
                      </div>

                      {/* Dynamic Options with Delete Button */}
                      {allCategories?.map((item: any, i) => (
                        <div
                          key={i}
                          className="flex cursor-pointer items-center justify-between px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                          <span
                            onClick={() => {
                              setSelectedProduct(item);
                              setIsOpen(false);
                            }}
                          >
                            {item?.title}??
                          </span>

                          {/* Delete Button */}
                          <button className="ml-2">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 1024 1024"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-4.5 w-full">
                <div className="flex items-center justify-between">
                  <label className=" block text-sm font-medium text-black dark:text-white">
                    Product Media
                  </label>
                  <p className="cursor-pointer text-lg">=</p>
                </div>

                <div className="mt-3 flex flex-wrap gap-4">
                  {/* Display selected images */}
                  {images.map((imgSrc, index) => (
                    <div
                      key={index}
                      className="relative flex h-[80px] w-[80px] items-center justify-center rounded-md border border-[#b9b9b9]"
                    >
                      <Image
                        src={imgSrc}
                        alt={`uploaded-${index}`}
                        width={80}
                        height={80}
                        className="h-[80px] w-[80px] object-cover"
                      />
                      <button
                        className="absolute -right-1.5 -top-1.5 h-6 w-6 rounded-full bg-black p-1 text-xs text-white hover:bg-red-500"
                        onClick={() => removeImage(index)}
                      >
                        X
                      </button>
                    </div>
                  ))}

                  {/* Upload Box */}
                  <label className="flex h-[80px] w-[100px] cursor-pointer items-center justify-center rounded-md border border-[#b9b9b9]">
                    <div className="space-y-1.5">
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        onChange={handleImageUpload}
                      />
                      <div className="flex justify-center">
                        <Image
                          src="/images/upload-image.svg"
                          alt="upload-image"
                          height={20}
                          width={20}
                        />
                      </div>
                      <p className="text-xs text-black">Upload Image</p>
                    </div>
                  </label>
                </div>
              </div>

              <div className="mb-4.5">
                <div className="flex items-center justify-between">
                  <label className=" block text-sm font-medium text-black dark:text-white">
                    Product Brand
                  </label>
                  <p className="cursor-pointer text-lg">=</p>
                </div>

                <div className="relative mt-3 w-full">
                  <button
                    onClick={() => setIsOpen1(!isOpen)}
                    className="flex w-full items-center justify-between rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  >
                    {selectedProduct1?.title || "Select Product Brand"}
                    <span>▼</span>
                  </button>

                  {isOpen1 && (
                    <div className="absolute left-0 z-10 mt-2 w-full rounded-md border border-gray-300 bg-white shadow-lg dark:border-gray-600 dark:bg-gray-800">
                      {/* Add Custom Type Button */}
                      <button
                        onClick={() => {
                          console.log("Open Modal or Input Field");
                          setIsOpen1(false);
                          handleOpenModal1(true);
                        }}
                        className="hover:bg-primary-dark w-full bg-primary px-4 py-2 text-left text-white transition"
                      >
                        + Add Custom Product Brand
                      </button>
                      {/* Default Option */}
                      <div
                        className="cursor-pointer px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                        onClick={() => {
                          setSelectedProduct1(null);
                          setIsOpen1(false);
                        }}
                      >
                        Select Product Brand
                      </div>

                      {/* Dynamic Options */}
                      {allCategories?.map((item: any, i) => (
                        <div
                          key={i}
                          className="cursor-pointer px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
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
                <div className="flex items-center justify-between">
                  <label className=" block text-sm font-medium text-black dark:text-white">
                    Price
                  </label>
                  <p className="cursor-pointer text-lg">=</p>
                </div>
                <input
                  type="text"
                  placeholder="Enter your price"
                  className="mt-3 w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <div className="mb-4.5">
                <div className="flex items-center justify-between">
                  <label className=" block text-sm font-medium text-black dark:text-white">
                    Discount Price
                  </label>
                  <p className="cursor-pointer text-lg">=</p>
                </div>
                <input
                  type="text"
                  placeholder="Enter your discount price"
                  className="mt-3 w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <div className="mb-4.5">
                <div className="flex items-center justify-between">
                  <label className=" block text-sm font-medium text-black dark:text-white">
                    HSN Code
                  </label>
                  <p className="cursor-pointer text-lg">=</p>
                </div>
                <input
                  type="text"
                  placeholder="Enter your HSN code"
                  className="mt-3 w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <div className="mb-4.5">
                <div className="flex items-center justify-between">
                  <label className=" block text-sm font-medium text-black dark:text-white">
                    GST Rate
                  </label>
                  <p className="cursor-pointer text-lg">=</p>
                </div>
                <input
                  type="text"
                  placeholder="Enter your GST rate"
                  className="mt-3 w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between">
                  <label className=" block text-sm font-medium text-black dark:text-white">
                    Description
                  </label>
                  <p className="cursor-pointer text-lg">=</p>
                </div>
                <textarea
                  rows={6}
                  placeholder="Type your message"
                  className="mt-3 w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                ></textarea>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label className=" block text-sm font-medium text-black dark:text-white">
                    Stock
                  </label>
                  <p className="cursor-pointer text-lg">=</p>
                </div>
                <div className="relative z-20 mt-3 inline-block w-full border border-stroke">
                  <select
                    name="#"
                    id="#"
                    className="relative z-20 inline-flex w-full appearance-none bg-transparent py-3 pl-3 pr-8 text-sm font-medium outline-none"
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

              <button className="mt-10 flex w-full justify-center rounded-md bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Edit Form */}
      <div
        className={`${editForm ? "duration-400 absolute right-0 top-0 z-99 h-full w-full bg-[#0000007d] transition-all" : ""}`}
      >
        <div
          className={`no-scrollbar fixed right-0 top-0 z-99 h-full w-[30%] overflow-auto bg-white shadow-lg transition-transform duration-300 dark:bg-boxdark ${
            editForm ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Edit Product Form
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
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your product name"
                  value={selectedProduct?.name || ""}
                  onChange={handleInputChange}
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
                    className="flex w-full items-center justify-between rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  >
                    {selectedProduct?.title || "Select Product Type"}
                    <span>▼</span>
                  </button>

                  {isOpen && (
                    <div className="absolute left-0 z-10 mt-2 w-full rounded-md border border-gray-300 bg-white shadow-lg dark:border-gray-600 dark:bg-gray-800">
                      {/* Add Custom Type Button */}
                      <button
                        onClick={() => {
                          console.log("Open Modal or Input Field");
                          setIsOpen(false);
                          handleOpenModal(true);
                        }}
                        className="hover:bg-primary-dark w-full bg-primary px-4 py-2 text-left text-white transition"
                      >
                        + Add Custom Product Type
                      </button>
                      {/* Default Option */}
                      <div
                        className="cursor-pointer px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                        onClick={() => {
                          setSelectedProduct(null);
                          setIsOpen(false);
                        }}
                      >
                        Select Product Type
                      </div>

                      {/* Dynamic Options */}
                      {allCategories?.map((item: any, i) => (
                        <div
                          key={i}
                          className="cursor-pointer px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
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

              <div className="mb-4.5 w-full">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Product Media
                </label>

                <div className="flex flex-wrap gap-4">
                  {/* Display selected images */}
                  {images.map((imgSrc, index) => (
                    <div
                      key={index}
                      className="relative flex h-[80px] w-[80px] items-center justify-center rounded-md border border-[#b9b9b9]"
                    >
                      <Image
                        src={imgSrc}
                        alt={`uploaded-${index}`}
                        width={80}
                        height={80}
                        className="h-[80px] w-[80px] object-cover"
                      />
                      <button
                        className="absolute -right-1.5 -top-1.5 h-6 w-6 rounded-full bg-black p-1 text-xs text-white hover:bg-red-500"
                        onClick={() => removeImage(index)}
                      >
                        X
                      </button>
                    </div>
                  ))}

                  {/* Upload Box */}
                  <label className="flex h-[80px] w-[100px] cursor-pointer items-center justify-center rounded-md border border-[#b9b9b9]">
                    <div className="space-y-1.5">
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        onChange={handleImageUpload}
                      />
                      <div className="flex justify-center">
                        <Image
                          src="/images/upload-image.svg"
                          alt="upload-image"
                          height={20}
                          width={20}
                        />
                      </div>
                      <p className="text-xs text-black">Upload Image</p>
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
                    className="flex w-full items-center justify-between rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  >
                    {selectedProduct1?.title || "Select Product Brand"}
                    <span>▼</span>
                  </button>

                  {isOpen1 && (
                    <div className="absolute left-0 z-10 mt-2 w-full rounded-md border border-gray-300 bg-white shadow-lg dark:border-gray-600 dark:bg-gray-800">
                      {/* Add Custom Type Button */}
                      <button
                        onClick={() => {
                          console.log("Open Modal or Input Field");
                          setIsOpen1(false);
                          handleOpenModal1(true);
                        }}
                        className="hover:bg-primary-dark w-full bg-primary px-4 py-2 text-left text-white transition"
                      >
                        + Add Custom Product Brand
                      </button>
                      {/* Default Option */}
                      <div
                        className="cursor-pointer px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                        onClick={() => {
                          setSelectedProduct1(null);
                          setIsOpen1(false);
                        }}
                      >
                        Select Product Brand
                      </div>

                      {/* Dynamic Options */}
                      {allCategories?.map((item: any, i) => (
                        <div
                          key={i}
                          className="cursor-pointer px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
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
                  name="price"
                  value={selectedProduct?.price || ""}
                  onChange={handleInputChange}
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
                  name="salePrice"
                  value={selectedProduct?.salePrice || ""}
                  onChange={handleInputChange}
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
                  name="gst"
                  value={selectedProduct?.gst || ""}
                  onChange={handleInputChange}
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
                  name="description"
                  value={selectedProduct?.description || ""}
                  onChange={handleInputChange}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                ></textarea>
              </div>

              <div className="relative z-20 inline-block w-full border border-stroke">
                <select
                  name="#"
                  id="#"
                  className="relative z-20 inline-flex w-full appearance-none bg-transparent py-3 pl-3 pr-8 text-sm font-medium outline-none"
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

              <button
                onClick={handleUpdateProduct}
                className="mt-10 flex w-full justify-center rounded-md bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
              >
                Edit Product
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* add category model */}
      <div className="absolute z-999 flex items-center justify-center">
        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-[#00000062] bg-opacity-30">
            <div className="max-h-ful w-full max-w-sm rounded-lg bg-white p-6 shadow-lg">
              <h2 className="mb-4 text-xl font-semibold text-[#000]">
                Enter Product type
              </h2>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="mb-4 w-full rounded-md border border-gray-300 p-2 text-[#000]"
                placeholder="Type something..."
              />
              <div className="flex justify-end gap-4">
                {/* Submit button */}
                <button className="rounded-md bg-blue-500 px-4 py-2 text-white">
                  Add
                </button>
                {/* Cancel button */}
                <button
                  onClick={handleCloseModal}
                  className="rounded-md bg-gray-500 px-4 py-2 text-white"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* add Brand model */}
      <div className="absolute z-999 flex items-center justify-center">
        {/* Modal */}
        {isModalOpen1 && (
          <div className="fixed inset-0 flex items-center justify-center bg-[#00000062] bg-opacity-30">
            <div className="max-h-ful w-full max-w-sm rounded-lg bg-white p-6 shadow-lg">
              <h2 className="mb-4 text-xl font-semibold text-[#000]">
                Enter Product Brand
              </h2>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="mb-4 w-full rounded-md border border-gray-300 p-2 text-[#000]"
                placeholder="Type something..."
              />
              <div className="flex justify-end gap-4">
                {/* Submit button */}
                <button className="rounded-md bg-blue-500 px-4 py-2 text-white">
                  Add
                </button>
                {/* Cancel button */}
                <button
                  onClick={handleCloseModal1}
                  className="rounded-md bg-gray-500 px-4 py-2 text-white"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
