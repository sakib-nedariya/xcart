<<<<<<< HEAD
import { useEffect, useRef, useState } from "react";
=======
import React, { useState } from "react";
>>>>>>> 5e9d71c978b8d9b26fb0e8dcea8a09bc863a0a88
import Sidebar from "../layout/Sidebar";
import Navbar from "../layout/Navbar";
import Breadcrumb from "../layout/Breadcrumb";
import { IoIosEye } from "react-icons/io";
<<<<<<< HEAD
import default_profile from "../../../assets/image/default_profile.png"; 
import axios from "axios";
import { useNavigate } from "react-router-dom";

const port = import.meta.env.VITE_SERVER_URL;

const Users = () => {
  const [user, setUser] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const navigate = useNavigate();

   const tableContainerRef = useRef(null);

  // Filter data based on active tab
  const filteredData = user.filter((user) => {
    if (activeTab === "All") return true;
    if (activeTab === "Active") return user.status === 1;
    if (activeTab === "Blocked") return user.status === 0;
=======
import { IoPencil } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";

const Users = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [customerData, setCustomerData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter data based on active tab
  const filteredData = customerData.filter((customer) => {
    if (activeTab === "All") return true;
    if (activeTab === "Active") return customer.status === 1;
    if (activeTab === "Blocked") return customer.status === 0;
>>>>>>> 5e9d71c978b8d9b26fb0e8dcea8a09bc863a0a88
    return true;
  });
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

<<<<<<< HEAD
    const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      if (tableContainerRef.current) {
        tableContainerRef.current.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }
  };

  const handleNavigateView = (id) => {
    navigate(`/admin/view-user/${id}`);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(`${port}getAllUsers`);
        setUser(res.data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsers();
  }, []);

=======
>>>>>>> 5e9d71c978b8d9b26fb0e8dcea8a09bc863a0a88
  return (
    <>
      <Sidebar />
      <Navbar />
      <main className="admin-panel-header-div">
<<<<<<< HEAD
        <Breadcrumb title="Users" breadcrumbText="User List" />

        <div className="admin-panel-header-tabs">
          {["All", "Active", "Blocked"].map((tab) => (
            <button
              key={tab}
              type="button"
              className={`admin-panel-header-tab ${
                activeTab === tab ? "active" : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

             <div className="dashboard-table-container" ref={tableContainerRef}>
=======
        <Breadcrumb
          title="Users"
          breadcrumbText="User List"
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
              activeTab === "Blocked" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Blocked")}
          >
            Blocked
          </button>
        </div>

        <div className="dashboard-table-container">
>>>>>>> 5e9d71c978b8d9b26fb0e8dcea8a09bc863a0a88
          <table>
            <thead>
              <tr>
                <th>Name</th>
<<<<<<< HEAD
                <th>Email</th>
=======
                <th>Username</th>
>>>>>>> 5e9d71c978b8d9b26fb0e8dcea8a09bc863a0a88
                <th>Mobile Number</th>
                <th>Country</th>
                <th>State</th>
                <th>City</th>
<<<<<<< HEAD
                <th>Status</th>
=======
                <th>Pincode</th>
>>>>>>> 5e9d71c978b8d9b26fb0e8dcea8a09bc863a0a88
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
<<<<<<< HEAD
              {currentData.map((user, index) => (
                <tr key={index}>
                  <td className="product-info admin-profile">
                    <img
                      src={
                        user.profile
                          ? `/upload/${user.profile}`
                          : default_profile
                      }
                      alt="profile_image"
                      className="user-profile-image"
                    />
                    <span>
                      {user.first_name}&nbsp;{user.last_name}
                    </span>
                  </td>

                  <td>{user.email}</td>
                  <td>{user.mobile_number}</td>
                  <td>{user.country}</td>
                  <td>{user.state}</td>
                  <td>{user.city}</td>
                  <td>
                    <span
                      className={`status ${
                        user.status === 1 ? "published" : "out-of-stock"
                      }`}
                    >
                      {user.status === 1 ? "Active" : "Blocked"}
                    </span>
                  </td>
                  <td className="actions">
                    <IoIosEye
                      title="View"
                      onClick={() => handleNavigateView(user.id)}
                    /> 
=======
              {currentData.map((customer, index) => (
                <tr key={index}>
                  <td className="product-info admin-profile">
                    <img
                      src={`/upload/${customer.profile}`}
                      alt="profile_image"
                    />
                    <span>
                      {customer.first_name}&nbsp;
                      {customer.last_name}
                    </span>
                  </td>
                  <td>{customer.email}</td>
                  <td>{customer.mobile_number}</td>
                  <td>{new Date(customer.dob).toLocaleDateString("en-GB")}</td>
                  <td>
                    <span
                      className={`status ${
                        customer.status === 1 ? "published" : "out-of-stock"
                      }`}
                    >
                      {customer.status === 1 ? "Active" : "Blocked"}
                    </span>
                  </td>
                  <td>
                    {new Date(customer.created_date).toLocaleDateString(
                      "en-GB"
                    )}
                  </td>
                  <td className="actions">
                    <IoPencil
                      title="Edit"
                      onClick={() => handleNavigateEdit(customer.id)}
                    />
                    <IoIosEye
                      title="View"
                      onClick={() => handleNavigateView(customer.id)}
                    />
                    <MdDeleteForever
                      title="Delete"
                      onClick={() => openDeleteModal(customer.id)}
                    />
>>>>>>> 5e9d71c978b8d9b26fb0e8dcea8a09bc863a0a88
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          {totalItems > itemsPerPage && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              startIndex={startIndex}
              endIndex={endIndex}
              totalItems={totalItems}
            />
          )}
        </div>
      </main>
    </>
  );
};

export default Users;
