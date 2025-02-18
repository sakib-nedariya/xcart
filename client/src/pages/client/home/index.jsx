import React from "react";
import HeroContainer from "./HeroContainer";
import BrandCollection from "./BrandCollection";
import ProductCategory from "./ProductCategory";
import Contact from "./Contact";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

const index = () => {
  return (
    <>
    <Navbar/>
      <HeroContainer />
      <BrandCollection />
      <ProductCategory />
      <Contact />
      <Footer/>
    </>
  );
};

export default index;
