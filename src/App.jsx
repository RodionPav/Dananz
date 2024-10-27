import "./assets/scss/app.scss";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { axiosCatalog } from "./app/slices/CatalogSlice";
import React from "react";

import Home from "./page/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./page/About/About";
import Service from "./page/Service/Service";
import Catalog from "./page/Catalog/Catalog";
import Cart from "./page/Cart/Cart";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(axiosCatalog());
  }, []);
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
