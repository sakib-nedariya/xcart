import React from "react";
import HomeRoute from "./routes/client/HomeRoute";
import "./assets/css/main.css";
import LoginRoute from "./routes/client/LoginRoute";
const App = () => {
  return (
    <>
      <HomeRoute />
      <LoginRoute />
    </>
  );
};

export default App;
