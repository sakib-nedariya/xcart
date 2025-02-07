import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "../../pages/client/contact/Contact";

const HomeRoute = () => {
  return (
    <Routes>
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default HomeRoute;
