import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../../assets/css/client/navbar.css";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineUser,
} from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Check token

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // true if token exists
  }, []);

  return (
    <>
      <nav className="container-fluid navbar">
        <div className="container padding-side">
          <NavLink to="/" className={"navbar-logo"}>
            <h4>XCART</h4>
          </NavLink>

          {/* Menu List */}
          <ul className={isOpen ? "nav-links active" : "nav-links"}>
            <li>
              <NavLink to="/" onClick={() => setIsOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" onClick={() => setIsOpen(false)}>
                Product
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Conditionally render login/signup or icons */}
          {!isLoggedIn ? (
            <div className="login-signup-btn">
              <NavLink to="/login" onClick={() => setIsOpen(false)}>
                Login
              </NavLink>
              <NavLink to="/signup" onClick={() => setIsOpen(false)}>
                Signup
              </NavLink>
            </div>
          ) : (
            <div className="navbar_shopping_cart_and_profile">
              <NavLink to="/shopping-cart" className="cart-icon-wrapper">
                <AiOutlineShoppingCart />
                <span className="cart-badge">2</span>
              </NavLink>
              <NavLink to="/wishlist">
                <AiOutlineHeart />
              </NavLink>
              <NavLink to="/profile">
                <AiOutlineUser />
              </NavLink>
            </div>
          )}

          {/* Hamburger Icon */}
          <span className="menu-icon">
            {isOpen ? (
              <FaTimes onClick={toggleMenu} />
            ) : (
              <FaBars onClick={toggleMenu} />
            )}
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
