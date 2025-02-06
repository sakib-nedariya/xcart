import React from "react";
import "../../../assets/css/client/login.css";
import login from "../../../assets/image/login-bg.png";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc"; // Import Google icon
const Login = () => {
  return (
    <>
      <div className="container-fluid padding-main bg-color">
        <div className="container login-container">
          <div className="login">
            <img src={login} alt="Login" />
          </div>
          <div className="login-form">
            <h3>Login</h3>
            <form>
              <div className="form-group">
                <label>Username</label>
                <input type="text" name="username" placeholder="Feyz Ibrahim" />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                />
              </div>
              <div>
                <p>Forget password?</p>
                <div className="login-btn">
                  <button className="btn primary-btn" type="submit">
                    Login
                  </button>
                </div>
                <div className="google-btn">
                  <button className="btn primary-btn" type="button">
                    <FcGoogle
                      style={{ fontSize: "20px", marginRight: "8px", marginBottom:"-4px"}}
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
    </>
  );
};

export default Login;
