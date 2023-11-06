import { useNavigate } from "react-router-dom";
import React from "react";
import { useContext, MainContext } from "../../contexts/HomeContext.js";

const ProductBox = ({ price, title, image, id, category }) => {
  const { basketItems, setBasketItems } = useContext(MainContext);
  const navigate = useNavigate();

  function handleClick(e) {
    const newItem = {
      id,
      price,
      title,
      image,
      category,
    };

    const updatedBasketItems = [...basketItems, newItem];
    setBasketItems(updatedBasketItems);
    localStorage.setItem("basketItems", JSON.stringify(updatedBasketItems));
  }

  return (
    <div className="border-[1px] border-gray-200 w-[400px] min-h-[400px] rounded flex items-center justify-center flex-col p-4">
      <img
        className="w-[200px] h-[200px] rounded"
        src={image}
        onClick={() => navigate(`/detail/${id}`)}
      />
      <p className="mt-2 min-h-[50px] text-center">{title}</p>
      <p className="mt-2 font-bold">{price} $</p>
      <button
        onClick={handleClick}
        className="px-4 py-2 mt-4 rounded bg-black text-white"
      >
        Order Now
      </button>
    </div>
  );
};

export default ProductBox;
