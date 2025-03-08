import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoIosEye } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import DeleteModal from "../layout/DeleteModal";
import { IoPencil } from "react-icons/io5";
import Sidebar from "../layout/Sidebar";
import { notifySuccess } from "../layout/ToastMessage";
import Navbar from "../layout/Navbar";
import Breadcrumb from "../layout/Breadcrumb";
import Pagination from "../../../pages/admin/layout/Pagination";
import { useNavigate } from "react-router-dom";

const port = import.meta.env.VITE_SERVER_URL;

const Customer = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [customerData, setCustomerData] = useState([]);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Fetch customer data
  const getCustomerData = async () => {
    try {
      const res = await axios.get(`${port}getcustomerdata`);
      setCustomerData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Delete customer
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

  const handleCustomerDelete = async () => {
    try {
      await axios.delete(`${port}deletecustomerdata/${deleteId}`);
      getCustomerData();
      notifySuccess("Customer Deleted Successfully");
    } catch (error) {
      console.error("Error deleting customer:", error);
    }
    closeDeleteModal();
  };

  useEffect(() => {
    getCustomerData();
  }, []);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleNavigateEdit = (id) => {
    navigate(`/admin/edit-customer/${id}`);
  };

  const handleNavigateView = (id) => {
    navigate(`/admin/view-customer/${id}`);
  };

  // Filter data based on active tab
  const filteredData = customerData.filter((customer) => {
    if (activeTab === "All") return true;
    if (activeTab === "Active") return customer.status === 1;
    if (activeTab === "Blocked") return customer.status === 0;
    return true;
  });

  // Pagination logic on filtered data
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  return (
    <>
      <Sidebar />
      <Navbar />
      <main className="admin-panel-header-div">
        <Breadcrumb
          title="Customers"
          breadcrumbText="Customers List"
          button={{ link: "/admin/add-new-customer", text: "Add New Customer" }}
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
          <table>
            <thead>
              <tr>
                <th style={{ width: "20%" }}>Name</th>
                <th style={{ width: "25%" }}>Email</th>
                <th style={{ width: "10%" }}>Phone No</th>
                <th style={{ width: "10%" }}>DOB</th>
                <th style={{ width: "10%" }}>Status</th>
                <th style={{ width: "10%" }}>Added</th>
                <th style={{ width: "15%" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((customer, index) => (
                <tr key={index}>
                  <td className="product-info admin-profile">
                    <img
                      src={`/upload/${customer.profile}`}
                      alt="profile_image"
                    />
                    <span>
                      {customer.user_name}
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
                      onClick={() =>  handleNavigateView(customer.id)}
                    />
                    <MdDeleteForever
                      title="Delete"
                      onClick={() => openDeleteModal(customer.id)}
                    />
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

      {isDeleteModalOpen && (
        <DeleteModal
          title="Customer"
          onCancel={closeDeleteModal}
          onDelete={handleCustomerDelete}
        />
      )}
    </>
  );
};

export default Customer;
