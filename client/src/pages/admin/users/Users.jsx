import React, { useState } from "react";
import Sidebar from "../layout/Sidebar";
import Navbar from "../layout/Navbar";
import Breadcrumb from "../layout/Breadcrumb";
import { IoIosEye } from "react-icons/io";
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
    return true;
  });
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
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Mobile Number</th>
                <th>Country</th>
                <th>State</th>
                <th>City</th>
                <th>Pincode</th>
                <th>Action</th>
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
