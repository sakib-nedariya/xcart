import React from "react";
import "../../../assets/css/client/login.css";
import login from "../../../assets/image/login-bg.png";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

const Signup = () => {

  const navigate = useNavigate();

  const handleLoginNavigate = () => {
    navigate("/login")
  };

  return (
    <>
    <Navbar/>
      <div className="container-fluid bg-color">
        <div className="container padding-main login-container">
          <div className="login">
            <img src={login} alt="Login" />
          </div>
          <div className="login-form">
            <h3>Signup</h3>
            <form>
              <div className="form-group">
                <label>Username</label>
                <input type="text" name="username" placeholder="John Abraham" />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                />
              </div>

              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                />
              </div>

              <div className="form-group">
                <label>Phone Number(Optional)</label>
                <input
                  type="number"
                  name="number"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <p>Forget password?</p>
                <div className="login-btn">
                  <button
                    className="btn primary-btn"
                    type="submit"
                    onClick={() => handleLoginNavigate()}
                  >
                    Sign Up
                  </button>
                </div>

                <p className="sign-up">
                  Already have an account?{" "}
                  <Link to="/login">
                    <span>Login Now</span>
                  </Link>
                </p>

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
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Signup;
