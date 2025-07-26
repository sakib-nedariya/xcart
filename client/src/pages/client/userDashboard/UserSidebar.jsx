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

const UserSidebar = () => {
  return (
    <>
      <div className="user_sidebar_main">
        <ul>
          <li>
            <NavLink to="/user-dashboard">
              <MdOutlineDashboard />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/user-profile">
              <FiUser />
              Account Details
            </NavLink>
          </li>
          <li>
            <NavLink to="/#">
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
