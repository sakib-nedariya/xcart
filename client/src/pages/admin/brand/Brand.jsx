import React, { useState } from "react";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import { MdDeleteForever } from "react-icons/md";
import DashboardProImage from "../../../assets/image/dashboard_product_img.png";
import { IoPencil } from "react-icons/io5";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { IoIosEye } from "react-icons/io";
import Breadcrumb from "../layout/Breadcrumb";

const Brand = () => {
  const [activeTab, setActiveTab] = useState("All");
  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="admin-panel-header-div">
        <Breadcrumb
          title="Brands"
          breadcrumbText="Brand List"
          button={{ link: "/admin/add-brand", text: "Add Brand" }}
        />

        <div className="admin-panel-header-tabs">
          <button
            type="button"
            className={`admin-panel-header-tab 
                ${activeTab === "All" ? "active" : ""}`}
            onClick={() => setActiveTab("All")}
          >
            All
          </button>
          <button
            type="button"
            className={`admin-panel-header-tab 
                ${activeTab === "Processing" ? "active" : ""}`}
            onClick={() => setActiveTab("Processing")}
          >
            Active
          </button>
          <button
            type="button"
            className={`admin-panel-header-tab 
                ${activeTab === "Shipped" ? "active" : ""}`}
            onClick={() => setActiveTab("Shipped")}
          >
            Disable
          </button>
        </div>

        <div className="dashboard-table-container full-height">
          <table>
            <thead>
              <tr>
                <th>Brand Name</th>
                <th>Description</th>
                <th>Created Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="product-info">
                  <img src={DashboardProImage} alt="iPhone 11 Pro" />
                  <span>iPhone 11 Pro</span>
                </td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione, repudiandae!
                </td>
                <td>2499</td>
                <td>
                  <span className="status out-of-stock">Disable</span>
                </td>
                <td className="actions">
                  <IoPencil />
                  <IoIosEye />
                  <MdDeleteForever />
                </td>
              </tr>
              <tr>
                <td className="product-info">
                  <img src={DashboardProImage} alt="iPhone 11 Pro" />
                  <span>iPhone 11 Pro</span>
                </td>
                <td>10</td>
                <td>2499</td>
                <td>
                  <span className="status published">Delivered</span>
                </td>
                <td className="actions">
                  <IoPencil />
                  <IoIosEye />
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

export default Brand;
