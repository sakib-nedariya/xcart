import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductView from "../../pages/client/product/ProductView";


const ProductViewRoute = () => {
  return (
    <Routes>
      <Route path="/product-view" element={<ProductView />} />
    </Routes>
  );
};

export default ProductViewRoute;
