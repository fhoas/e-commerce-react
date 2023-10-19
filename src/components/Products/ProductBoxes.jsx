import React from "react";
import { MainContext, useContext } from "../../contexts/HomeContext";
import ProductBox from "./ProductBox";

const ProductBoxes = () => {
  const { products, activeButton } = useContext(MainContext);

  if (!products) {
    return <div>Veriler yükleniyor...</div>;
  }

  const filteredProducts =
    activeButton === "all"
      ? products
      : products.filter((product) => product.category === activeButton);

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <ProductBox
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductBoxes;
