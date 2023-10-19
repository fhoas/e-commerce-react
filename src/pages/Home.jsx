import React from "react";
import SimpleSlider from "../components/SimpleSlider";
import CategoryBar from "../components/CategoryBar";
import ProductBox from "../components/Products/ProductBox";
import ProductBoxes from "../components/Products/ProductBoxes";
import Products from "../api/Products";

const Home = () => {
  return (
    <div className="text-xl">
      <SimpleSlider />
      <CategoryBar />
      <ProductBoxes />
      <Products />
    </div>
  );
};

export default Home;
