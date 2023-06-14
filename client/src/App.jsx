import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

//components
import Navbar from "./scenes/global/Navbar";
import Home from "./scenes/home/Home";
import ItemDetails from "./scenes/itemDetails/ItemDetails";
import Checkout from "./scenes/checkout/Checkout";
import Confirmation from "./scenes/checkout/Confirmation";
import CartMenu from "./scenes/global/CartMenu";
import HamMenu from "./scenes/global/HamMenu";
import Footer from "./scenes/global/Footer";
import Login from "./scenes/global/Login";

import AllProducts from "./components/AllProducts";
import Hoodies from "./components/Hoodies";
import Tees from "./components/Tees";
import Lowers from "./components/Lowers";
//whenever path changes scroll to top of the page
const ScrollToTop = () => {
  // pathname represents current url path of the page
  const { pathname } = useLocation();

  // whenever pathname changes scroll to top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout/success" element={<Confirmation />} />
          <Route path="login" element={<Login />} />
          <Route path="all" element={<AllProducts />} />
          <Route path="tees" element={<Tees />} />
          <Route path="hoodies" element={<Hoodies />} />
          <Route path="lowers" element={<Lowers />} />
        </Routes>
        <HamMenu />
        <CartMenu />
        <Login />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
