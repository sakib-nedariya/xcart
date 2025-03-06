import React, { useState, useEffect } from "react";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import axios from "axios";
import DeleteModal from "../layout/DeleteModal";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { MdDeleteForever } from "react-icons/md";
import { notifySuccess } from "../layout/ToastMessage";
import { IoPencil } from "react-icons/io5";
import { IoIosEye } from "react-icons/io";
import Breadcrumb from "../layout/Breadcrumb";

const port = import.meta.env.VITE_SERVER_URL;

const Coupon = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [couponData, setCouponData] = useState([]);

  const getCouponData = async () => {
    try {
      const res = await axios.get(`${port}getcoupondata`);
      setCouponData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


    // Delete coupon
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
  
    const openDeleteModal = (id) => {
      setIsDeleteModalOpen(true);
      setDeleteId(id);
    };
  
    const closeDeleteModal = () => {
      setIsDeleteModalOpen(false);
      setDeleteId(null);
    };
  
    const handleCouponDelete = async () => {
      try {
        await axios.delete(`${port}deletecoupondata/${deleteId}`);
        getCouponData();
        notifySuccess("Coupon Deleted Successfully");
      } catch (error) {
        console.error("Error deleting customer:", error);
      }
      closeDeleteModal();
    };

  useEffect(() => {
    getCouponData();
  }, []);

  // Filter data based on activeTab
  const filteredData = couponData.filter((coupon) => {
    if (activeTab === "All") return true;
    if (activeTab === "Active") return coupon.status === 1;
    if (activeTab === "Expired") return coupon.status === 0;
    return true;
  });

  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="admin-panel-header-div">
        <Breadcrumb
          title="Coupon"
          breadcrumbText="Coupon List"
          button={{ link: "/admin/create-coupon", text: "Create Coupon" }}
        />
        <div className="admin-panel-header-tabs">
          <button
            type="button"
            className={`admin-panel-header-tab ${
              activeTab === "All" ? "active" : ""
            }`}
            onClick={() => setActiveTab("All")}
          >
            All
          </button>
          <button
            type="button"
            className={`admin-panel-header-tab ${
              activeTab === "Active" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Active")}
          >
            Active
          </button>
          <button
            type="button"
            className={`admin-panel-header-tab ${
              activeTab === "Expired" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Expired")}
          >
            Expired
          </button>
        </div>

        <div className="dashboard-table-container">
          <table>
            <thead>
              <tr>
                <th style={{ width: "15%" }}>Coupon Code</th>
                <th style={{ width: "10%" }}>Discount</th>
                <th style={{ width: "10%" }}>Max</th>
                <th style={{ width: "10%" }}>Min</th>
                <th style={{ width: "10%" }}>Start</th>
                <th style={{ width: "10%" }}>Expiry</th>
                <th style={{ width: "10%" }}>Status</th>
                <th style={{ width: "10%" }}>Created</th>
                <th style={{ width: "13%" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((coupon, index) => (
                <tr key={index}>
                  <td className="product-coupon-code">{coupon.coupon_code}</td>
                  <td className="product-stock-keeping-unit discount">
                    {coupon.discount}%
                  </td>
                  <td>₹{coupon.max_price}</td>
                  <td>₹{coupon.min_price}</td>
                  <td>
                    {new Date(coupon.start_date).toLocaleDateString("en-GB")}
                  </td>
                  <td>
                    {new Date(coupon.expiry_date).toLocaleDateString("en-GB")}
                  </td>
                  <td>
                    <span
                      className={`status ${
                        coupon.status === 1 ? "published" : "out-of-stock"
                      }`}
                    >
                      {coupon.status === 1 ? "Active" : "Expired"}
                    </span>
                  </td>
                  <td>
                    {new Date(coupon.created_date).toLocaleDateString("en-GB")}
                  </td>
                  <td className="actions">
                    <IoPencil
                      title="Edit"
                      onClick={() => handleEdit(coupon.id)}
                    />
                    <IoIosEye
                      title="View"
                      onClick={() => handleView(coupon.id)}
                    />
                    <MdDeleteForever
                      title="Delete"
                      onClick={() => openDeleteModal(coupon.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      {isDeleteModalOpen && (
        <DeleteModal
          title="Customer"
          onCancel={closeDeleteModal}
          onDelete={handleCouponDelete}
        />
      )}
    </>
  );
};

export default Coupon;
