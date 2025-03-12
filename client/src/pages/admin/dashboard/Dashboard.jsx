import React from "react";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import DashboardProImage from "../../../assets/image/dashboard_product_img.png";
import {
  HiOutlinePlus,
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
} from "react-icons/hi";
import { IoMdArrowDropright, IoIosEye } from "react-icons/io";
import { IoPencil } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="admin-panel-header-div">
        <h5>Dashboard</h5>
        <div class="stats-container">

          <div class="stats-box">
            <div class="stats-info">
              <div class="stats-title">Total Brands</div>
              <div class="stats-value">50</div>
              <div class="stats-description">Total Brands is here</div>
            </div>
          </div>

          <div class="stats-box">
            <div class="stats-info">
              <div class="stats-title">Total Category</div>
              <div class="stats-value">40</div>
              <div class="stats-description">Total Category is here</div>
            </div>
          </div>

          <div class="stats-box">
            <div class="stats-info">
              <div class="stats-title">Total Products</div>
              <div class="stats-value">200</div>
              <div class="stats-description">Total Products is here</div>
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
                <th>Date</th>
                <th>Customer</th>
                <th>Total</th>
                <th>Payment</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="product-stock-keeping-unit">302012</td>
                <td className="product-info">
                  <img src={DashboardProImage} alt="iPhone 11 Pro" />
                  <span>iPhone 11 Pro</span>
                </td>
                <td>20 Feb 2024</td>
                <td>Josh Wisley</td>
                <td>₹59000</td>
                <td>24 Feb 2024</td>
                <td>
                  <span className="status processing">Processing</span>
                </td>
                <td className="actions">
                  <IoPencil />
                  <IoIosEye />
                  <MdDeleteForever />
                </td>
              </tr>
              <tr>
                <td className="product-stock-keeping-unit">302012</td>
                <td className="product-info">
                  <img src={DashboardProImage} alt="iPhone 11 Pro" />
                  <span>iPhone 11 Pro</span>
                </td>
                <td>20 Feb 2024</td>
                <td>Josh Wisley</td>
                <td>₹59000</td>
                <td>24 Feb 2024</td>
                <td>
                  <span className="status processing">Processing</span>
                </td>
                <td className="actions">
                  <IoPencil />
                  <IoIosEye />
                  <MdDeleteForever />
                </td>
              </tr>
              <tr>
                <td className="product-stock-keeping-unit">302012</td>
                <td className="product-info">
                  <img src={DashboardProImage} alt="iPhone 11 Pro" />
                  <span>iPhone 11 Pro</span>
                </td>
                <td>20 Feb 2024</td>
                <td>Josh Wisley</td>
                <td>₹59000</td>
                <td>24 Feb 2024</td>
                <td>
                  <span className="status processing">Processing</span>
                </td>
                <td className="actions">
                  <IoPencil />
                  <IoIosEye />
                  <MdDeleteForever />
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
