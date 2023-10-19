import { useState } from "react";
import { MainContext } from "./contexts/HomeContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageContainer from "./containers/PageContainer";
import Header from "./components/Header";
import Page404 from "./pages/404";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

function App() {
  const [activeButton, setActiveButton] = useState(null);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const data = {
    activeButton,
    setActiveButton,
    products,
    setProducts,
    loading,
    setLoading,
  };

  return (
    <>
      <MainContext.Provider value={data}>
        <PageContainer>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </Router>
        </PageContainer>
      </MainContext.Provider>
    </>
  );
}

export default App;
