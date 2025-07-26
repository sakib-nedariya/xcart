import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/client/home";
import Contact from "../../pages/client/contact/Contact";
import Product from "../../pages/client/product/ProductListing";
import ProductView from "../../pages/client/product/ProductView";
import ShoppingCart from "../../pages/client/cart/ShoppingCart";
import Checkout from "../../pages/client/cart/Checkout";
import Login from "../../pages/client/login/Login";
import Signup from "../../pages/client/login/Signup";
import WishList from "../../pages/client/userDashboard/WishList";
import Dashboard from "../../pages/client/userDashboard/Dashboard";

const HomeRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Product />} />
        <Route path="/product/:id" element={<ProductView />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/user-dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default HomeRoute;
