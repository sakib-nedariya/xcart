import React from "react";
import { Route, Routes } from "react-router-dom";
import "../../assets/css/main.css"
import Dashboard from "../../pages/admin/dashboard/Dashboard";
import Product from "../../pages/admin/product/Product";
import Category from "../../pages/admin/category/Category";
import Order from "../../pages/admin/orders/Order";
import Coupon from "../../pages/admin/coupon/coupon";
import ManageAdmin from "../../pages/admin/manage_admin/ManageAdmin";
import Customer from "../../pages/admin/customers/Customer";
import AddProduct from "../../pages/admin/product/AddProduct";


const DashboardRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/product" element={<Product />} />
        <Route path="/admin/category" element={<Category />} />
        <Route path="/admin/orders" element={<Order />} />
        <Route path="/admin/coupon" element={<Coupon/>} />
        <Route path="/admin/manage-admins" element={<ManageAdmin/>} />
        <Route path="/admin/customers" element={<Customer/>} />
        <Route path="/admin/add-product" element={<AddProduct/>} />
      </Routes>
    </>
  );
};

export default DashboardRoute;
