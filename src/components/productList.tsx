import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import ProductCard from "./productCard";

const ProductList = ({ products }) => {
  const [currentProduct, setCurrentProduct] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      setCurrentProduct(products[0]);
      if (products[0].items.length > 0) {
        setItems(products[0].items);
      }
    }
  }, [products]); // Only re-run the effect if 'products' changes

  if (!currentProduct) {
    return <div>Loading...</div>; // Or some other placeholder
  }

  return (
    <div className="container mx-auto px-6 py-8 flex space-x-20 pl-20">
      <div className="flex justify-between flex-col">
        <div className="flex flex-col ">
          <h2 className="text-2xl font-semibold text-black mb-2">
            {currentProduct.title}
          </h2>
          <p
            className="text-lg text-gray-500
          "
          >
            {currentProduct.subtitle}
          </p>
        </div>
        {/* <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer"> */}
        {/* Right Arrow Placeholder */}
        <div className="flex">
          <div className="text-2xl text-gray-300">
            <IoIosArrowBack />
          </div>
          <div className="text-2xl text-gray-300">
            <IoIosArrowForward />
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className="flex space-x-4">
        {currentProduct.title !== "HOT DEAL" ? (
          items
            .slice(0, 4)
            .map((item) => (
              <ProductCard key={item.uuid} product={item.publication} />
            ))
        ) : (
          <ProductCard key={items[0].uuid} product={items[0].publication} />
        )}
      </div>
    </div>
  );
};

export default ProductList;
