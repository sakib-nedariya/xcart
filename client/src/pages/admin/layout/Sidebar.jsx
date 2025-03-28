import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { RiAdminLine, RiCoupon2Line, RiProductHuntLine } from "react-icons/ri";
import { LuUsers } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";
import { IoGiftOutline, IoPricetagsOutline } from "react-icons/io5";
import { MdOutlineCategory } from "react-icons/md";
import "../../../assets/css/admin/sidebar.css";


const Sidebar = () => {
  const navigate = useNavigate();
  const logout = async (e) => {
    e.preventDefault();
    localStorage.removeItem("adminToken");
    navigate("/admin");
  };
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin");
    }
  }, []);
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
              <NavLink to="/admin/dashboard">
                <RxDashboard />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/product">
                <RiProductHuntLine />
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/brand">
                <IoPricetagsOutline />
                Brand
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/category">
                <MdOutlineCategory />
                Category
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/orders">
                <IoGiftOutline />
                Orders
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/coupon">
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
              <NavLink to="/admin/manage-admins">
                <RiAdminLine />
                Manage Admins
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/customers">
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
              <NavLink onClick={(e) => logout(e)} to="/logout">
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
