import React, { useState, useEffect } from "react";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import DashboardProImage from "../../../assets/image/dashboard_product_img.png";
import { FaUsers } from "react-icons/fa";
import { CgProductHunt } from "react-icons/cg";
import { IoPricetagsOutline } from "react-icons/io5";
import { MdOutlineCategory } from "react-icons/md";
import axios from "axios";

const port = import.meta.env.VITE_SERVER_URL;

const Dashboard = () => {
  const [customers, setCustomers] = useState([]);
  const [brands, setBrands] = useState([]);
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);

  const [popularProducts, setPopularProducts] = useState([
    {
      name: "iPhone 11 Pro",
      image: DashboardProImage,
      sales: 350,
      revenue: 24500,
    },
    {
      name: "MacBook Air M2",
      image: DashboardProImage,
      sales: 275,
      revenue: 275000,
    },
    {
      name: "MacBook Air M2",
      image: DashboardProImage,
      sales: 275,
      revenue: 275000,
    },
    

  ]);

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
        <div className="stats-container">
          <div className="stats-box">
            <div className="stats-info">
              <div className="stats-title">CUSTOMERS</div>
              <div className="stats-value">{customers.length}</div>
            </div>
            <div className="stats-logo">
              <FaUsers />
            </div>
          </div>

          <div className="stats-box">
            <div className="stats-info">
              <div className="stats-title">BRANDS</div>
              <div className="stats-value">{brands.length}</div>
            </div>
            <div className="stats-logo">
              <IoPricetagsOutline />
            </div>
          </div>

          <div className="stats-box">
            <div className="stats-info">
              <div className="stats-title">CATEGORIES</div>
              <div className="stats-value">{category.length}</div>
            </div>
            <div className="stats-logo">
              <MdOutlineCategory />
            </div>
          </div>

          <div className="stats-box">
            <div className="stats-info">
              <div className="stats-title">PRODUCTS</div>
              <div className="stats-value">{products.length}</div>
            </div>
            <div className="stats-logo">
              <CgProductHunt />
            </div>
          </div>
        </div>

        <div className="dashboard-content-wrapper">
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

          {/* Most Popular Products Section */}
          {/* <div className="dashboard-table-container most-popular-products" style={{ width: "30%", justifyContent: "start" }}>
          <h6 id="dashboard-title-container-header">Most Popular Products</h6>
            <div className="popular-products-grid">
              {popularProducts.map((product, index) => (
                <div key={index} className="popular-product-card">
                  <img src={product.image} alt={product.name} />
                  <div className="popular-product-info">
                    <h5>{product.name}</h5>
                    <p>Sales: <strong>{product.sales}</strong></p>
                    <p>Revenue: <strong>${product.revenue}</strong></p>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </main>
    </>
  );
};

export default Dashboard;
