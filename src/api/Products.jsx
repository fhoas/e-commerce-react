import React, { useEffect } from "react";
import axios from "axios";
import { MainContext, useContext } from "../contexts/HomeContext";

const Products = () => {
  const { products, setProducts, loading, setLoading } =
    useContext(MainContext);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Veri çekme hatası:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Data is loading...</div>;
  }
};

export default Products;
