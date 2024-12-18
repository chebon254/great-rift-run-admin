"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';

export default function AddProduct() {
    const [formData, setFormData] = useState({
        category: 'TSHIRTS',
        name: '',
        description: '',
        inStock: 0,
        price: 0,
        size: 'S',
        color: '',
        material: '',
        images: [] as File[]
    });
    
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: type === 'number' ? Number(value) : value,
        }));
    };

    const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const fileArray = Array.from(files);
            // Limit to 4 images
            const limitedFiles = fileArray.slice(0, 4);
            setFormData((prev) => ({
                ...prev,
                images: limitedFiles
            }));
        }
    };

    const removeImage = (indexToRemove: number) => {
        setFormData((prev) => ({
            ...prev,
            images: prev.images.filter((_, index) => index !== indexToRemove)
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Placeholder for form submission logic
        console.log(formData);
    };

    const renderCategorySpecificFields = () => {
        switch(formData.category) {
            case 'TSHIRTS':
            case 'HOODIES':
                return (
                    <>
                        {/* Size Field */}
                        <div className="sm:col-span-3">
                            <label htmlFor="size" className="block text-sm font-medium text-gray-900">
                                Size
                            </label>
                            <div className="mt-2 grid grid-cols-1">
                                <select
                                    id="size"
                                    name="size"
                                    value={formData.size}
                                    onChange={handleChange}
                                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-sm text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                >
                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                    <option>XXL</option>
                                </select>
                                <svg
                                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Color Field */}
                        <div className="sm:col-span-3">
                            <label htmlFor="color" className="block text-sm font-medium text-gray-900">
                                Color
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="color"
                                    id="color"
                                    value={formData.color}
                                    onChange={handleChange}
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-sm text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                />
                            </div>
                        </div>

                        {/* Material Field */}
                        <div className="sm:col-span-3">
                            <label htmlFor="material" className="block text-sm font-medium text-gray-900">
                                Material
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="material"
                                    id="material"
                                    value={formData.material}
                                    onChange={handleChange}
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-sm text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                />
                            </div>
                        </div>
                    </>
                );
            case 'WATER':
            case 'CAPS':
                return null; // No additional fields for these categories
            default:
                return null;
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 shadow-2xl">
            <div className="space-y-12">
                <div className="">
                    <h2 className="text-base font-semibold text-gray-900">Add New Product</h2>
                </div>

                <div className="border-b border-gray-900/10 pb-12">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        {/* Category */}
                        <div className="sm:col-span-3">
                            <label htmlFor="category" className="block text-sm font-medium text-gray-900">
                                Category
                            </label>
                            <div className="mt-2 grid grid-cols-1">
                                <select
                                    id="category"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-sm text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                >
                                    <option>TSHIRTS</option>
                                    <option>HOODIES</option>
                                    <option>CAPS</option>
                                    <option>WATER</option>
                                </select>
                                <svg
                                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Name */}
                        <div className="sm:col-span-3">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                                Name
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-sm text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                />
                            </div>
                        </div>

                        {/* Description */}
                        <div className="sm:col-span-6">
                            <label htmlFor="description" className="block text-sm font-medium text-gray-900">
                                Description
                            </label>
                            <div className="mt-2">
                                <textarea
                                    name="description"
                                    id="description"
                                    rows={3}
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-sm text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                />
                            </div>
                        </div>

                        {/* In Stock */}
                        <div className="sm:col-span-3">
                            <label htmlFor="inStock" className="block text-sm font-medium text-gray-900">
                                In Stock
                            </label>
                            <div className="mt-2">
                                <input
                                    type="number"
                                    name="inStock"
                                    id="inStock"
                                    value={formData.inStock}
                                    onChange={handleChange}
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-sm text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                />
                            </div>
                        </div>

                        {/* Price */}
                        <div className="sm:col-span-3">
                            <label htmlFor="price" className="block text-sm font-medium text-gray-900">
                                Price
                            </label>
                            <div className="mt-2">
                                <input
                                    type="number"
                                    name="price"
                                    id="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-sm text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                />
                            </div>
                        </div>

                        {/* Render category-specific fields */}
                        {renderCategorySpecificFields()}

                        {/* Image Upload */}
                        <div className="sm:col-span-6">
                            <label htmlFor="images" className="block text-sm font-medium text-gray-900">
                                Product Images (Max 4)
                            </label>
                            <div className="mt-2 flex items-center space-x-2">
                                <input
                                    type="file"
                                    id="images"
                                    name="images"
                                    accept="image/*"
                                    multiple
                                    onChange={handleImageUpload}
                                    className="block w-full text-sm text-gray-900 file:mr-4 file:rounded-md file:border-0 file:bg-indigo-50 file:px-3 file:py-2 file:text-sm file:font-medium hover:file:bg-indigo-100"
                                />
                            </div>
                            {/* Image Preview */}
                            {formData.images.length > 0 && (
                                <div className="mt-4 flex space-x-2">
                                    {formData.images.map((file, index) => (
                                        <div key={index} className="relative">
                                            <Image 
                                                src={URL.createObjectURL(file)} 
                                                height={100}
                                                width={100}
                                                alt={`Preview ${index + 1}`} 
                                                className="h-20 w-20 object-cover rounded-md"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removeImage(index)}
                                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 text-xs"
                                            >
                                                X
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Submit/Cancel buttons */}
            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                    type="button"
                    className="text-sm font-semibold text-gray-900"
                    onClick={() => {
                        // Reset form or navigate away
                        setFormData({
                            category: 'TSHIRTS',
                            name: '',
                            description: '',
                            inStock: 0,
                            price: 0,
                            size: 'S',
                            color: '',
                            material: '',
                            images: []
                        });
                    }}
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Save
                </button>
            </div>
        </form>
    );
}