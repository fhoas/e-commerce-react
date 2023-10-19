import React, { useEffect } from "react";
import { MainContext, useContext } from "../contexts/HomeContext";

const CategoryBar = () => {
  const { activeButton, setActiveButton } = useContext(MainContext);

  useEffect(() => {
    setActiveButton("all");
  }, []);

  function handleButton(e) {
    const clickedValue = e.target.getAttribute("value");

    setActiveButton(clickedValue);

    if (activeButton) {
      document
        .querySelector(".active-button")
        .classList.remove("active-button");
    }

    if (e.target.className !== "active-button") {
      e.target.classList.add("active-button");
    }
  }

  return (
    <div className="flex justify-between w-full rounded bg-gray-100 h-fit mb-8 ">
      <div
        value="all"
        onClick={handleButton}
        className={`flex-1 text-center py-4 rounded ${
          activeButton === "all" ? "active-button" : ""
        }`}
      >
        All
      </div>
      <div
        value="electronics"
        onClick={handleButton}
        className={`flex-1 text-center py-4 rounded ${
          activeButton === "sneakers" ? "active-button" : ""
        }`}
      >
        Electronics
      </div>
      <div
        value="jewelery"
        onClick={handleButton}
        className={`flex-1 text-center py-4 rounded ${
          activeButton === "clothes" ? "active-button" : ""
        }`}
      >
        Jewelery
      </div>
      <div
        value="men's clothing"
        onClick={handleButton}
        className={`flex-1 text-center py-4 rounded ${
          activeButton === "pants" ? "active-button" : ""
        }`}
      >
        Men's clothing
      </div>
      <div
        value="women's clothing"
        onClick={handleButton}
        className={`flex-1 text-center py-4 rounded ${
          activeButton === "other" ? "active-button" : ""
        }`}
      >
        Women's clothing
      </div>
    </div>
  );
};

export default CategoryBar;
