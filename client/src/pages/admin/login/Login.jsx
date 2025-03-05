import React, { useState } from "react";
import "../../../assets/css/admin/login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [passwordViewOrHide, setPasswordViewOrHide] = useState(false);

  const handelSubmit = () => {
    navigate("/admin/dashboard");
  };
  return (
    <>
      <div className="admin-login-container">
        <div className="admin-login-box">
          <h2>Login</h2>
          <p className="subtitle">Welcome back! Please enter your details.</p>
          <form>
            <div className="admin-login-input-group">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="admin-login-input-group">
              <input
                type={passwordViewOrHide ? "text" : "password"}
                placeholder="Password"
                required
              />
              <span
                style={{
                  position: "absolute",
                  right: "4%",
                  top: "33%",
                  cursor: "pointer",
                  color: "gray",
                }}
                onClick={() => {
                  setPasswordViewOrHide(!passwordViewOrHide);
                }}
              >
                {passwordViewOrHide ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <button
              type="submit"
              className="primary-btn"
              onClick = {() => handelSubmit()}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
