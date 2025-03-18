import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../assets/css/client/login.css";
import login from "../../../assets/image/login-bg.png";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

const Login = () => {
  const navigate = useNavigate();
  const [passwordViewOrHide, setPasswordViewOrHide] = useState(false);

  const handleshoppingcartNavigate = () => {
    navigate("/shopping-cart");
  };
  return (
    <>
      <Navbar />
      <div className="container-fluid bg-color">
        <div className="container padding-main login-container">
          <div className="login">
            <img src={login} alt="Login" />
          </div>
          <div className="login-form">
            <h3>Login</h3>
            <form>
              <div className="form-group">
                <label>Username</label>
                <span className="required_field">*</span>
                <input type="text" name="username" placeholder="Feyz Ibrahim" />
              </div>

              <div className="form-group password-input">
                <label>Password</label>
                <span className="required_field">*</span>
                <input
                   type={passwordViewOrHide ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                />
                <span
                  onClick={() => {
                    setPasswordViewOrHide(!passwordViewOrHide);
                  }}
                >
                  {passwordViewOrHide ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <div>
                <p>Forget password?</p>
                <div className="login-btn">
                  <button
                    className="btn primary-btn"
                    type="submit"
                    onClick={() => handleshoppingcartNavigate()}
                  >
                    Login
                  </button>
                </div>
                <div className="google-btn">
                  <button className="btn primary-btn" type="button">
                    <FcGoogle
                      style={{
                        fontSize: "20px",
                        marginRight: "8px",
                        marginBottom: "-4px",
                      }}
                    />
                    Continue With Google
                  </button>
                </div>
                <p className="sign-up">
                  Don't have an account?{" "}
                  <Link to="/signup">
                    <span>Sign up now</span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
