import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
const ProductCard = ({ product }) => {
  console.log(product);
  const [media, setMedia] = useState(null);

  useEffect(() => {
    // Assuming product.media is an array and you want to take the first item
    const mediaItem = product?.media?.[0];
    if (mediaItem && mediaItem.uri) {
      setMedia(mediaItem);
    }
  }, [product]);

  if (!product) {
    return <div>Loading...</div>; // Or some other placeholder
  }

  if (!media) {
    return <div>Loading...</div>; // Or some other placeholder
  }

  console.log("media", media.uri);
  console.log("currentProduct", product.productName);
  return (
    <div className="flex flex-col overflow-hidden">
      <img
        className="w-full h-56 object-cover object-center"
        src={media.uri}
        alt={product.productName}
      />
      <div className="text-black text-xs uppercase  p-1 tracking-wider">
        {product.productName}
      </div>
      {product.tagsOnDesc !== "" && (
        <div className="flex items-center bg-red-100  border-gray-200 w-fit">
          <span className="text-sm px-1 text-red-500">
            {product.tagsOnDesc}
          </span>
        </div>
      )}
      <div className="flex items-center ">
        <h2 className="text-lg f text-red-500">
          {product.priceInfo.discountRate !== undefined
            ? `${product.priceInfo.discountRate}%`
            : product.priceInfo.couponDiscountRate !== undefined
            ? `${product.priceInfo.couponDiscountRate}%`
            : ""}
        </h2>
        <span className="text-lg  text-black">
          {product.priceInfo.discountPrice !== undefined
            ? product.priceInfo.discountPrice.toLocaleString() + "원"
            : product.priceInfo.couponDiscountPrice !== undefined
            ? product.priceInfo.couponDiscountPrice.toLocaleString() + "원"
            : ""}
        </span>
      </div>
      <div className="flex items-center justify-between p-1">
        <span className="text-sm text-gray-900 flex items-center">
          <FaStar /> {product.rating}
        </span>
      </div>
      {product.preface !== "" && product.prefaceIconUrl !== "" && (
        <div
          className="flex items-center p-1 border border-gray-200 w-fit cursor-pointer
      "
        >
          <img
            src={product.prefaceIconUrl}
            alt={product.preface}
            className="w-[20px]"
          />
          <span className="text-sm text-gray-900 flex items-center">
            {product.preface}
          </span>
        </div>
      )}
    </div>
  );
};

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
