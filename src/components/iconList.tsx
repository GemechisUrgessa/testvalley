import React from "react";

const IconList = ({ items }: { items: any }) => {
  return (
    <div className="flex justify-center items-center space-x-4 my-9">
      {items.map((item: any, index: number) => (
        <div key={index} className="text-center">
          <div className="icon-wrapper mb-2">
            <img src={item.imageUrl} alt={item.title} className="mx-auto" />
          </div>
          <div className="title text-black">{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default IconList;
