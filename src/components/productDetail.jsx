import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MainContext, useContext } from "../contexts/HomeContext";

const ProductDetail = () => {
  const [getData, setGetData] = useState(null);
  const { id } = useParams();
  const { products } = useContext(MainContext);
  useEffect(() => {
    setGetData(products.find((dt) => dt.id == id));
  }, [id]);

  console.log(getData);
  return (
    <>
      {getData ? (
        <div className="border-[1px] border-gray-200 w-full min-h-[300px] rounded flex items-center justify-center p-8">
          <img
            className="h-[200px] w-[200px] rounded flex-6"
            src={getData?.image}
          />
          <div className="flex flex-col justify-center items-center flex-6">
            <p className="mt-2 min-h-[50px] text-center">{getData?.title}</p>
            <p className="mt-2 min-h-[50px] text-center">
              {getData?.description}
            </p>
            <p className="mt-2 font-bold">{getData?.price} $</p>
          </div>
        </div>
      ) : (
        <div>cannot find</div>
      )}
    </>
  );
};

export default ProductDetail;
