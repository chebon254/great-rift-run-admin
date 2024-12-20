"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Product } from "../../../types/product";
import AddProduct from "@/components/Form/AddProduct";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch products from the database
  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/products");
      if (!response.ok) throw new Error("Failed to fetch products");
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Filter products based on category
  const filterProducts = (category: string) => {
    setSelectedCategory(category);
    if (category === "ALL") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

  // Categories array for dynamic rendering
  const categories = ["ALL", "TSHIRTS", "HOODIE", "CAPS", "WATER"];

  return (
    <>
      {showAddProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setShowAddProduct(false)}
              className="absolute right-4 top-4 text-white z-50"
            >
              ✕
            </button>
            <AddProduct />
          </div>
        </div>
      )}

      <div className="relative z-10 rounded-[10px] bg-white shadow-1 mb-4 px-4 py-4 md:px-6 2xl:px-7 flex flex-wrap items-center justify-between">
        <div className="flex flex-wrap items-center justify-start gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => filterProducts(category)}
              className={`py-3 px-7 rounded-sm ${
                selectedCategory === category
                  ? "bg-[#14AE5C] text-white"
                  : "bg-[#f1f1f1] hover:bg-[#14AE5C] hover:text-[#FFFFFF]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="mt-4 sm:mt-0">
          <button
            onClick={() => setShowAddProduct(true)}
            className="border-[2px] rounded-sm py-3 px-7 hover:bg-[#14AE5C] hover:text-[#FFFFFF] hover:border-[#14AE5C]"
          >
            + ADD NEW
          </button>
        </div>
      </div>

      <div className="relative z-10 rounded-[10px] bg-white shadow-1">
        <div className="grid grid-cols-6 border-t border-stroke px-4 py-4 sm:grid-cols-8 md:px-6 2xl:px-7">
          <div className="col-span-3 flex items-center">
            <p className="font-medium">Product Name</p>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="font-medium">Category</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Price</p>
          </div>
          <div className="col-span-2 flex items-center">
            <p className="font-medium">Stock</p>
          </div>
        </div>

        {isLoading ? (
          <div className="text-center py-8">Loading products...</div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-8">No products found</div>
        ) : (
          filteredProducts.map((product) => (
            <div
              className="grid grid-cols-6 border-t border-stroke px-4 py-4 sm:grid-cols-8 md:px-6 2xl:px-7"
              key={product.id}
            >
              <div className="col-span-3 flex items-center">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="h-12.5 w-15 rounded-md">
                    <Image
                      src={product.imageURL1 || "/product/placeholder.webp"}
                      width={60}
                      height={50}
                      alt={product.name}
                    />
                  </div>
                  <p className="text-body-sm font-medium text-dark">
                    {product.name}
                  </p>
                </div>
              </div>
              <div className="col-span-2 hidden items-center sm:flex">
                <p className="text-body-sm font-medium text-dark">
                  {product.category}
                </p>
              </div>
              <div className="col-span-1 flex items-center">
                <p className="text-body-sm font-medium text-dark">
                  ${product.price}
                </p>
              </div>
              <div className="col-span-2 flex items-center">
                <p className="text-body-sm font-medium text-dark">
                  {product.inStock}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
