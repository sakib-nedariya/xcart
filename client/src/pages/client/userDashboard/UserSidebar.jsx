import React from "react";
import { NavLink } from "react-router-dom";
import "../../../assets/css/client/userDashboard/userSidebar.css";
import { MdOutlineDashboard } from "react-icons/md";
import { FiUser, FiLogOut } from "react-icons/fi";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineClockCircle,
} from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

const UserSidebar = () => {
  return (
    <>
      <div className="user_sidebar_main">
        <ul>
          <li>
            <NavLink to="/">
              <MdOutlineDashboard />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile">
              <FiUser />
              Account Details
            </NavLink>
          </li>
          <li>
            <NavLink to="/order-history">
              <AiOutlineClockCircle />
              Order History
            </NavLink>
          </li>
          <li>
            <NavLink to="/shopping-cart">
              <AiOutlineShoppingCart />
              Shopping Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/wishlist">
              <AiOutlineHeart />
              Wishlist
            </NavLink>
          </li>
          <li>
            <NavLink to="/address">
              <IoLocationOutline />
              Address
            </NavLink>
          </li>
          <li>
            <NavLink to="/#">
              <FiLogOut />
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default UserSidebar;
