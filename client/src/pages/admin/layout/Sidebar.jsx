import React from "react";
import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { RiAdminLine, RiCoupon2Line, RiProductHuntLine } from "react-icons/ri";
import { LuUsers } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";
import { IoSettingsOutline, IoGiftOutline } from "react-icons/io5";
import { MdOutlineCategory } from "react-icons/md";
import "../../../assets/css/admin/sidebar.css";

const Sidebar = () => {
  return (
    <>
      <aside className="admin-dashboard-sidebar">
        <div className="admin-sidebar-logo">
          <h4>XCART</h4>
        </div>
        <div className="menu-content">
          <h6>MENU</h6>
          <ul>
            <li>
              <NavLink to="/dashboard">
                <RxDashboard />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/product">
                <RiProductHuntLine />
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/category">
                <MdOutlineCategory />
                Category
              </NavLink>
            </li>
            <li>
              <NavLink to="/orders">
                <IoGiftOutline />
                Orders
              </NavLink>
            </li>
            <li>
              <NavLink to="/coupon">
                <RiCoupon2Line />
                Coupon
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="menu-content">
          <h6>USER MANAGEMENT</h6>
          <ul>
            <li>
              <NavLink to="/manage-admins">
                <RiAdminLine />
                Manage Admins
              </NavLink>
            </li>
            <li>
              <NavLink to="/customers">
                <LuUsers />
                Customers
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="menu-content">
          <h6>OTHERS</h6>
          <ul>
            <li>
              <NavLink to="/logout">
                <FiLogOut />
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
