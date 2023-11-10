import React, { useEffect } from "react";
import { useContext, MainContext } from "../contexts/HomeContext";
import BasketItem from "../components/BasketItem";

const Basket = () => {
  const { basketItems, setBasketItems } = useContext(MainContext);

  useEffect(() => {
    const storedBasketItems = localStorage.getItem("basketItems");
    if (storedBasketItems) {
      setBasketItems(JSON.parse(storedBasketItems));
    }
  }, [setBasketItems]);

  useEffect(() => {
    if (basketItems.length > 0) {
      localStorage.setItem("basketItems", JSON.stringify(basketItems));
    }
  }, [basketItems]);

  basketItems.filter

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 min-h-[77vh]">
        <h1 className="text-3xl">Your Basket</h1>
        <ul className="flex flex-col gap-4 w-full">
          {basketItems.map((item, index) => (
            <li key={index}>
              <BasketItem item={item} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Basket;
