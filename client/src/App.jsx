import React from "react";
import HomeRoute from "./routes/client/HomeRoute";
import "./assets/css/main.css";
import LoginRoute from "./routes/client/LoginRoute";
import ContactRoute from "./routes/client/ContactRoute";
import ProductListingRoute from "./routes/client/ProductListingRoute";
import ProductViewRoute from "./routes/client/ProductViewRoute";
const App = () => {
  return (
    <>
      <HomeRoute />
      <LoginRoute />
      <ProductListingRoute />
      <ProductViewRoute />
      <ContactRoute />
    </>
  );
};

export default App;
