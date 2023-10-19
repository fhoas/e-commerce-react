import React from "react";

const ProductBox = ({ price, title, image, id, category }) => {
  return (
    <div className="border-[1px] border-gray-200 w-[400px] min-h-[400px] rounded flex items-center justify-center flex-col p-4">
      <img className="w-[250px] h-[200px] rounded" src={image} />
      <p className="mt-2 min-h-[50px] text-center">{title}</p>
      <p className="mt-2 font-bold">{price} $</p>
      <button className="px-4 py-2 mt-4 rounded bg-yellow-500	 text-white">
        Order Now
      </button>
    </div>
  );
};

export default ProductBox;
