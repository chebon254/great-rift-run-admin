import Image from "next/image";
import { Product } from "../../../types/product";
import AddProduct from "@/components/Form/AddProduct";

const productData: Product[] = [
  {
    image: "/product/product-01.webp",
    name: "Apple Watch Series 7",
    category: "Electronics",
    price: 296,
  },
  {
    image: "/product/product-01.webp",
    name: "Macbook Pro M1",
    category: "Electronics",
    price: 546,
  },
  {
    image: "/product/product-01.webp",
    name: "Dell Inspiron 15",
    category: "Electronics",
    price: 443,
  },
  {
    image: "/product/product-01.webp",
    name: "HP Probook 450",
    category: "Electronics",
    price: 499,
  },
  {
    image: "/product/product-01.webp",
    name: "Macbook Pro M1",
    category: "Electronics",
    price: 546,
  },
  {
    image: "/product/product-01.webp",
    name: "Dell Inspiron 15",
    category: "Electronics",
    price: 443,
  },
  {
    image: "/product/product-01.webp",
    name: "HP Probook 450",
    category: "Electronics",
    price: 499,
  },
  {
    image: "/product/product-01.webp",
    name: "Macbook Pro M1",
    category: "Electronics",
    price: 546,
  },
  {
    image: "/product/product-01.webp",
    name: "Dell Inspiron 15",
    category: "Electronics",
    price: 443,
  },
  {
    image: "/product/product-01.webp",
    name: "HP Probook 450",
    category: "Electronics",
    price: 499,
  },
];

function Products() {
  return (
    <>
      <div className="hidden absolute z-50 min-h-screen w-screen  items-center justify-center bg-[#00000033]">
        <AddProduct />
      </div>
      <div className="relative z-10 rounded-[10px] bg-white shadow-1 mb-4 px-4 py-4 md:px-6 2xl:px-7 flex items-center justify-between">
        <div className="flex items-center justify-start">
          <button className="mr-4 py-3 px-7 rounded-sm bg-[#dedede] hover:bg-[#14AE5C] hover:text-[#FFFFFF]">
            ALL
          </button>
          <button className="mr-4 py-3 px-7 rounded-sm bg-[#f1f1f1] hover:bg-[#14AE5C] hover:text-[#FFFFFF]">
            T-SHIRTS
          </button>
          <button className="mr-4 py-3 px-7 rounded-sm bg-[#f1f1f1] hover:bg-[#14AE5C] hover:text-[#FFFFFF]">
            HOODIE
          </button>
          <button className="mr-4 py-3 px-7 rounded-sm bg-[#f1f1f1] hover:bg-[#14AE5C] hover:text-[#FFFFFF]">
            CAPS
          </button>
          <button className="mr-4 py-3 px-7 rounded-sm bg-[#f1f1f1] hover:bg-[#14AE5C] hover:text-[#FFFFFF]">
            WATER
          </button>
        </div>
        <div>
          <button className="border-[2px] rounded-sm py-3 px-7 hover:bg-[#14AE5C] hover:text-[#FFFFFF] hover:border-[#14AE5C]">
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
        </div>

        {productData.map((product, key) => (
          <div
            className="grid grid-cols-6 border-t border-stroke px-4 py-4 sm:grid-cols-8 md:px-6 2xl:px-7"
            key={key}
          >
            <div className="col-span-3 flex items-center">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="h-12.5 w-15 rounded-md">
                  <Image
                    src={product.image}
                    width={60}
                    height={50}
                    alt="Product"
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
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
