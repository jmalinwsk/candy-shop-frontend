import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Store from "./pages/Store";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import CreateAccount from "./pages/CreateAccount";
import ResetPassword from "./pages/ResetPassword";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FAQ from "./pages/FAQ";
import ReturnAndRefundPolicy from "./pages/ReturnAndRefundPolicy";
import TermsOfService from "./pages/TermsOfService";
import ShippingPolicy from "./pages/ShippingPolicy";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="store" element={<Store />} />
            <Route path="store/:_id" element={<SingleProduct />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="login" element={<Login />} />
            <Route path="login/forgot-password" element={<ForgotPassword />} />
            <Route path="login/reset-password" element={<ResetPassword />} />
            <Route path="create-account" element={<CreateAccount />} />
            <Route path="FAQ" element={<FAQ />} />
            <Route
              path="return-and-refund-policy"
              element={<ReturnAndRefundPolicy />}
            />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="TOS" element={<TermsOfService />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route path="cart" element={<Cart />} />
            <Route path="cart/checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
