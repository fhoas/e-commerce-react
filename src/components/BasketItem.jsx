import React from "react";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { useContext, MainContext } from "../contexts/HomeContext";

const BasketItem = ({ item }) => {
  const { productCount, setProductCount } = useContext(MainContext);

  function handleIncrease() {
    setProductCount(productCount + 1);
  }

  function handleDecrease() {
    if (productCount !== 0) {
      setProductCount(productCount - 1);
    }
  }

  return (
    <div className="itemBox flex border py-8 px-16 justify-between items-center">
      <img className="h-[200px] w-[200px]" src={item.image} alt="" />
      <div className="text-xl flex flex-col items-start justify-start">
        <div>{item.title}</div>
        <div>{item.price}$</div>
      </div>
      <div className="text-xl">{item.price}$</div>
      <div className="flex items-center justify-center gap-4 border p-4 rounded-lg bg-black text-white w-[125px]">
        <button onClick={handleDecrease}>
          <AiFillMinusCircle size={24} className="hover:text-slate-300" />
        </button>
        <div className="font-bold text-xl">{productCount}</div>
        <button onClick={handleIncrease}>
          <AiFillPlusCircle size={24} className="hover:text-slate-300" />
        </button>
      </div>
    </div>
  );
};

export default BasketItem;
