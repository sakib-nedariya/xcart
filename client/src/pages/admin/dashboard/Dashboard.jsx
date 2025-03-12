import React, { useState, useEffect } from "react";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import DashboardProImage from "../../../assets/image/dashboard_product_img.png";
import { FaUsers } from "react-icons/fa";
import { CgProductHunt } from "react-icons/cg";
import { BiDollar } from "react-icons/bi";
import { IoPricetagsOutline } from "react-icons/io5";
import { MdOutlineCategory } from "react-icons/md";
import { use } from "react";
import axios from "axios";
const port = import.meta.env.VITE_SERVER_URL;

const Dashboard = () => {
  const [customers, setCustomers] = useState([]);
  const [brands, setBrands] = useState([]);
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);

  const getCustomerData = async () => {
    try {
      const res = await axios.get(`${port}getcustomerdata`);
      setCustomers(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getBrandData = async () => {
    try {
      const res = await axios.get(`${port}getbranddata`);
      setBrands(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getCategoryData = async () => {
    try {
      const res = await axios.get(`${port}getcategorydata`);
      setCategory(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getProductData = async () => {
    try {
      const res = await axios.get(`${port}getproductdata`);
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getCustomerData();
    getBrandData();
    getCategoryData();
    getProductData();
  }, []);
  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="admin-panel-header-div">
        <h5>Dashboard</h5>
        <div class="stats-container">
          <div class="stats-box">
            <div class="stats-info">
              <div class="stats-title">CUSTOMERS</div>
              <div class="stats-value">{customers.length}</div>
            </div>
            <div class="stats-logo">
              <FaUsers />
            </div>
          </div>

          <div class="stats-box">
            <div class="stats-info">
              <div class="stats-title">BRANDS</div>
              <div class="stats-value">{brands.length}</div>
            </div>
            <div class="stats-logo">
              <IoPricetagsOutline />
            </div>
          </div>

          <div class="stats-box">
            <div class="stats-info">
              <div class="stats-title">CATEGORIES</div>
              <div class="stats-value">{category.length}</div>
            </div>
            <div class="stats-logo">
              <MdOutlineCategory />
            </div>
          </div>

          <div class="stats-box">
            <div class="stats-info">
              <div class="stats-title">PRODUCTS</div>
              <div class="stats-value">{products.length}</div>
            </div>
            <div class="stats-logo">
              <CgProductHunt />
            </div>
          </div>
        </div>
        <div className="dashboard-table-container">
          <h6 id="dashboard-title-container-header">Latest Orders</h6>
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Product</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="product-stock-keeping-unit">302012</td>
                <td className="product-info">
                  <img src={DashboardProImage} alt="iPhone 11 Pro" />
                  <span>iPhone 11 Pro</span>
                </td>
                <td>Josh Wisley</td>
                <td>20 Feb 2024</td>

                <td>
                  <span className="status processing">Processing</span>
                </td>
              </tr>
              <tr>
                <td className="product-stock-keeping-unit">302012</td>
                <td className="product-info">
                  <img src={DashboardProImage} alt="iPhone 11 Pro" />
                  <span>iPhone 11 Pro</span>
                </td>
                <td>Josh Wisley</td>
                <td>20 Feb 2024</td>
                <td>
                  <span className="status processing">Processing</span>
                </td>
              </tr>
              <tr>
                <td className="product-stock-keeping-unit">302012</td>
                <td className="product-info">
                  <img src={DashboardProImage} alt="iPhone 11 Pro" />
                  <span>iPhone 11 Pro</span>
                </td>
                <td>Josh Wisley</td>
                <td>20 Feb 2024</td>
                <td>
                  <span className="status processing">Processing</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
