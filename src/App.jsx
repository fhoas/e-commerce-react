import { useState } from "react";
import { MainContext } from "./contexts/HomeContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import PageContainer from "./containers/PageContainer";
import Header from "./components/Header";
import Page404 from "./pages/404";
import Footer from "./components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import ProductDetail from "./components/ProductDetail";

function App() {
  const [activeButton, setActiveButton] = useState(null);

  const [basketItems, setBasketItems] = useState([]);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const data = {
    activeButton,
    setActiveButton,
    products,
    setProducts,
    loading,
    setLoading,
    basketItems,
    setBasketItems
  };

  console.log(products);

  return (
    <>
      <MainContext.Provider value={data}>
        <PageContainer>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/basket" element={<Basket />} />
              <Route path="/detail/:id" element={<ProductDetail />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </Router>
          <Footer />
        </PageContainer>
      </MainContext.Provider>
    </>
  );
}

export default App;
