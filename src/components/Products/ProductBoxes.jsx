import React, { useState } from "react";
import { MainContext, useContext } from "../../contexts/HomeContext";
import ProductBox from "./ProductBox";
import ReactPaginate from "react-paginate";

const ProductBoxes = () => {
  const { products, activeButton } = useContext(MainContext);


  if (!products) {
    return <div>Veriler yükleniyor...</div>;
  }

  const filteredProducts =
    activeButton === "all"
      ? products
      : products.filter((product) => product.category === activeButton);

  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = filteredProducts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {currentItems.map((product, index) => (
          <div
            key={index}
            className="ProductBox"

          >
            <ProductBox
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              category={product.category}
            />
          </div>
        ))}
      </div>
      <ReactPaginate
        className=" paginate flex justify-center items-center mt-8"
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default ProductBoxes;
