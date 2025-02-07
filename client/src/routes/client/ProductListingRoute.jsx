import React from "react";
import { Route, Routes } from "react-router-dom";
import Product from "../../pages/client/product/ProductListing";


const ProductListingRoute = () => {
  return (
    <Routes>
      <Route path="/product" element={<Product />} />
    </Routes>
  );
};

export default ProductListingRoute;
