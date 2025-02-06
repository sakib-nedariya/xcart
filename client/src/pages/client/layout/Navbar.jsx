import React, { useState } from "react";
import logo from "../../../assets/image/logo.png";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for toggle button
import "../../../assets/css/client/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="container-fluid navbar">
        <div className="container padding-side">
          <NavLink to="/">
            <img className="nav-logo" src={logo} alt="Logo" />
          </NavLink>

          {/* Menu List */}
          <ul className={isOpen ? "nav-links active" : "nav-links"}>
            <li>
              <NavLink to="/" onClick={() => setIsOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/product" onClick={() => setIsOpen(false)}>
                Product
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="login-signup-btn">
            <NavLink to="/login" onClick={() => setIsOpen(false)}>
              Login
            </NavLink>
            <NavLink to="/signup" onClick={() => setIsOpen(false)}>
              Signup
            </NavLink>
          </div>
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
