import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import {
  HiOutlinePlus,
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
} from "react-icons/hi";
import { IoMdArrowDropright } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { IoPencil } from "react-icons/io5";

const Coupon = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="admin-panel-header-div">
        <div className="admin-dashboard-main-header">
          <div>
            <h5>Coupon</h5>
            <div className="admin-panel-breadcrumb">
              <Link to="/dashboard" className="breadcrumb-link active">
                Dashboard
              </Link>
              <IoMdArrowDropright />
              <span className="breadcrumb-text">Coupon List</span>
            </div>
          </div>
          <button className="primary-btn dashboard-add-product-btn">
            <HiOutlinePlus /> Create Coupon
          </button>
        </div>

        <div className="admin-panel-header-tabs">
          <button
            className={`admin-panel-header-tab 
                ${activeTab === "All" ? "active" : ""}`}
            onClick={() => setActiveTab("All")}
          >
            All
          </button>
          <button
            className={`admin-panel-header-tab 
                ${activeTab === "Active" ? "active" : ""}`}
            onClick={() => setActiveTab("Active")}
          >
            Active
          </button>
          <button
            className={`admin-panel-header-tab 
                ${activeTab === "Expired" ? "active" : ""}`}
            onClick={() => setActiveTab("Expired")}
          >
            Expired
          </button>
        </div>

        <div className="dashboard-table-container">
          <table>
            <thead>
              <tr>
                <th style={{ width: "" }}>Coupon Code</th>
                <th style={{ width: "" }}>Discount</th>
                <th style={{ width: "" }}>Max</th>
                <th style={{ width: "" }}>Min</th>
                <th style={{ width: "" }}>Start</th>
                <th style={{ width: "" }}>Expiry</th>
                <th style={{ width: "" }}>Status</th>
                <th style={{ width: "" }}>Created</th>
                <th style={{ width: "" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ color: "black" }} className="product-coupon-code">
                  SOMERANDOMCODEHERE
                </td>
                <td className="product-stock-keeping-unit discount">15%</td>
                <td>₹2000</td>
                <td>30000</td>
                <td>01 Feb 2024</td>
                <td>31 Oct 2024</td>
                <td>
                  <span className="status published">Active</span>
                </td>
                <td>24 Jan 2024</td>
                <td className="actions">
                  <IoPencil />
                  <MdDeleteForever />
                </td>
              </tr>
              <tr>
                <td style={{ color: "black" }} className="product-coupon-code">
                  SOMERANDOMCODEHERE
                </td>
                <td className="product-stock-keeping-unit">15%</td>
                <td>₹2000</td>
                <td>30000</td>
                <td>01 Feb 2024</td>
                <td>31 Oct 2024</td>
                <td>
                  <span className="status published">Active</span>
                </td>
                <td>24 Jan 2024</td>
                <td className="actions">
                  <IoPencil />
                  <MdDeleteForever />
                </td>
              </tr>
              <tr>
                <td style={{ color: "black" }} className="product-coupon-code">
                  SOMERANDOMCODEHERE
                </td>
                <td className="product-stock-keeping-unit">15%</td>
                <td>₹2000</td>
                <td>30000</td>
                <td>01 Feb 2024</td>
                <td>31 Oct 2024</td>
                <td>
                  <span className="status out-of-stock">Expired</span>
                </td>
                <td>24 Jan 2024</td>
                <td className="actions">
                  <IoPencil />
                  <MdDeleteForever />
                </td>
              </tr>
              <tr>
                <td style={{ color: "black" }} className="product-coupon-code">
                  SOMERANDOMCODEHERE
                </td>
                <td className="product-stock-keeping-unit">15%</td>
                <td>₹2000</td>
                <td>30000</td>
                <td>01 Feb 2024</td>
                <td>31 Oct 2024</td>
                <td>
                  <span className="status published">Active</span>
                </td>
                <td>24 Jan 2024</td>
                <td className="actions">
                  <IoPencil />
                  <MdDeleteForever />
                </td>
              </tr>
              <tr>
                <td style={{ color: "black" }} className="product-coupon-code">
                  SOMERANDOMCODEHERE
                </td>
                <td className="product-stock-keeping-unit">15%</td>
                <td>₹2000</td>
                <td>30000</td>
                <td>01 Feb 2024</td>
                <td>31 Oct 2024</td>
                <td>
                  <span className="status published">Active</span>
                </td>
                <td>24 Jan 2024</td>
                <td className="actions">
                  <IoPencil />
                  <MdDeleteForever />
                </td>
              </tr>
              <tr>
                <td style={{ color: "black" }} className="product-coupon-code">
                  SOMERANDOMCODEHERE
                </td>
                <td className="product-stock-keeping-unit">15%</td>
                <td>₹2000</td>
                <td>30000</td>
                <td>01 Feb 2024</td>
                <td>31 Oct 2024</td>
                <td>
                  <span className="status published">Active</span>
                </td>
                <td>24 Jan 2024</td>
                <td className="actions">
                  <IoPencil />
                  <MdDeleteForever />
                </td>
              </tr>
              <tr>
                <td style={{ color: "black" }} className="product-coupon-code">
                  SOMERANDOMCODEHERE
                </td>
                <td className="product-stock-keeping-unit">15%</td>
                <td>₹2000</td>
                <td>30000</td>
                <td>01 Feb 2024</td>
                <td>31 Oct 2024</td>
                <td>
                  <span className="status out-of-stock">Expired</span>
                </td>
                <td>24 Jan 2024</td>
                <td className="actions">
                  <IoPencil />
                  <MdDeleteForever />
                </td>
              </tr>
              <tr>
                <td style={{ color: "black" }} className="product-coupon-code">
                  SOMERANDOMCODEHERE
                </td>
                <td className="product-stock-keeping-unit">15%</td>
                <td>₹2000</td>
                <td>30000</td>
                <td>01 Feb 2024</td>
                <td>31 Oct 2024</td>
                <td>
                  <span className="status published">Active</span>
                </td>
                <td>24 Jan 2024</td>
                <td className="actions">
                  <IoPencil />
                  <MdDeleteForever />
                </td>
              </tr>
              <tr>
                <td style={{ color: "black" }} className="product-coupon-code">
                  SOMERANDOMCODEHERE
                </td>
                <td className="product-stock-keeping-unit">15%</td>
                <td>₹2000</td>
                <td>30000</td>
                <td>01 Feb 2024</td>
                <td>31 Oct 2024</td>
                <td>
                  <span className="status published">Active</span>
                </td>
                <td>24 Jan 2024</td>
                <td className="actions">
                  <IoPencil />
                  <MdDeleteForever />
                </td>
              </tr>
              <tr>
                <td style={{ color: "black" }} className="product-coupon-code">
                  SOMERANDOMCODEHERE
                </td>
                <td className="product-stock-keeping-unit">15%</td>
                <td>₹2000</td>
                <td>30000</td>
                <td>01 Feb 2024</td>
                <td>31 Oct 2024</td>
                <td>
                  <span className="status published">Active</span>
                </td>
                <td>24 Jan 2024</td>
                <td className="actions">
                  <IoPencil />
                  <MdDeleteForever />
                </td>
              </tr>
              <tr>
                <td style={{ color: "black" }} className="product-coupon-code">
                  SOMERANDOMCODEHERE
                </td>
                <td className="product-stock-keeping-unit">15%</td>
                <td>₹2000</td>
                <td>30000</td>
                <td>01 Feb 2024</td>
                <td>31 Oct 2024</td>
                <td>
                  <span className="status out-of-stock">Expired</span>
                </td>
                <td>24 Jan 2024</td>
                <td className="actions">
                  <IoPencil />
                  <MdDeleteForever />
                </td>
              </tr>
              <tr>
                <td style={{ color: "black" }} className="product-coupon-code">
                  SOMERANDOMCODEHERE
                </td>
                <td className="product-stock-keeping-unit">15%</td>
                <td>₹2000</td>
                <td>30000</td>
                <td>01 Feb 2024</td>
                <td>31 Oct 2024</td>
                <td>
                  <span className="status published">Active</span>
                </td>
                <td>24 Jan 2024</td>
                <td className="actions">
                  <IoPencil />
                  <MdDeleteForever />
                </td>
              </tr>
              <tr>
                <td style={{ color: "black" }} className="product-coupon-code">
                  SOMERANDOMCODEHERE
                </td>
                <td className="product-stock-keeping-unit">15%</td>
                <td>₹2000</td>
                <td>30000</td>
                <td>01 Feb 2024</td>
                <td>31 Oct 2024</td>
                <td>
                  <span className="status published">Active</span>
                </td>
                <td>28 Jun 2023</td>
                <td className="actions">
                  <IoPencil />
                  <MdDeleteForever />
                </td>
              </tr>
            </tbody>
          </table>

          <div className="table-footer-pagination">
            <span>Showing 1-10 from 100</span>
            <ul className="pagination">
              <li className="arrow">
                <HiOutlineArrowLeft />
              </li>
              <li className="">01</li>
              <li>02</li>
              <li>03</li>
              <li>04</li>
              <li>05</li>
              <li className="arrow">
                <HiOutlineArrowRight />
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default Coupon;
