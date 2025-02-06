import React from "react";
import HomeRoute from "./routes/client/HomeRoute";
import "./assets/css/main.css";
import LoginRoute from "./routes/client/LoginRoute";
import ContactRoute from "./routes/client/ContactRoute";
import ProductListingRoute from "./routes/client/ProductListingRoute";
const App = () => {
  return (
    <>
      <HomeRoute />
      <LoginRoute />
      <ProductListingRoute />
      <ContactRoute />
    </>
  );
};

export default App;
