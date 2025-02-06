import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import HeroContainer from "./HeroContainer";

const index = () => {
  return (
    <div>
      <Navbar />
      <HeroContainer/>
      <Footer />
    </div>
  );
};

export default index;
