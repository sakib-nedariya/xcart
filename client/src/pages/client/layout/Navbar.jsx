import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; 
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
