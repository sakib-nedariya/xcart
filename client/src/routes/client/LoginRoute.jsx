import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../../pages/client/login/Login";
import Signup from "../../pages/client/login/Signup";
const LoginRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default LoginRoute;
