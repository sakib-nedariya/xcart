import React from "react";
import "./assets/css/main.css";
import HomeRoute from "./routes/client/HomeRoute";
import DashboardRoute from "./routes/admin/DashboardRoute";
const App = () => {
  return (
    <>
      <HomeRoute />
      <DashboardRoute/>
    </>
  );
};

export default App;
