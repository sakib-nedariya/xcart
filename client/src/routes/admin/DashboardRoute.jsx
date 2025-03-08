import React from "react";
import { Route, Routes } from "react-router-dom";
import "../../assets/css/main.css";
import Login from "../../pages/admin/login/Login";
import Dashboard from "../../pages/admin/dashboard/Dashboard";

import Category from "../../pages/admin/category/Category";
import AddCategory from "../../pages/admin/category/AddCategory";

import Product from "../../pages/admin/product/Product";
import AddProduct from "../../pages/admin/product/AddProduct";

import Order from "../../pages/admin/orders/Order";

import Coupon from "../../pages/admin/coupon/Coupon";
import CreateCoupon from "../../pages/admin/coupon/CreateCoupon";
import EditCoupon from "../../pages/admin/coupon/EditCoupon";
import ViewCoupon from "../../pages/admin/coupon/ViewCoupon";

import ManageAdmin from "../../pages/admin/manage_admin/ManageAdmin";
import AddNewAdmin from "../../pages/admin/manage_admin/AddNewAdmin";
import EditAdmin from "../../pages/admin/manage_admin/EditAdmin";
import ViewAdmin from "../../pages/admin/manage_admin/ViewAdmin";

import Customer from "../../pages/admin/customers/Customer";
import AddNewCustomer from "../../pages/admin/customers/AddNewCustomer";
import EditCustomer from "../../pages/admin/customers/EditCustomer";
import ViewCustomer from "../../pages/admin/customers/ViewCustomer";


const DashboardRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/product" element={<Product />} />
        <Route path="/admin/add-product" element={<AddProduct />} />

        <Route path="/admin/category" element={<Category />} />
        <Route path="/admin/add-category" element={<AddCategory />} />

        <Route path="/admin/orders" element={<Order />} />

        <Route path="/admin/coupon" element={<Coupon />} />
        <Route path="/admin/create-coupon" element={<CreateCoupon />} />
        <Route path="/admin/edit-coupon/:id" element={<EditCoupon />} />
        <Route path="/admin/view-coupon/:id" element={<ViewCoupon />} />

        <Route path="/admin/manage-admins" element={<ManageAdmin />} />
        <Route path="/admin/add-new-admin" element={<AddNewAdmin />} />
        <Route path="/admin/edit-admin/:id" element={<EditAdmin />} />
        <Route path="/admin/view-admin/:id" element={<ViewAdmin />} />

        <Route path="/admin/customers" element={<Customer />} />
        <Route path="/admin/add-new-customer" element={<AddNewCustomer />} />
        <Route path="/admin/edit-customer/:id" element={<EditCustomer />} />
        <Route path="/admin/view-customer/:id" element={<ViewCustomer />} />
      </Routes>
    </>
  );
};

export default DashboardRoute;
