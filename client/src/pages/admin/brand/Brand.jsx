import React, { useState, useEffect } from "react";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import { MdDeleteForever } from "react-icons/md";
import DeleteModal from "../layout/DeleteModal";
import { IoPencil } from "react-icons/io5";
import { IoIosEye } from "react-icons/io";
import Breadcrumb from "../layout/Breadcrumb";
import { useNavigate } from "react-router-dom";
import { notifySuccess } from "../layout/ToastMessage";
import Pagination from "../../../pages/admin/layout/Pagination";
import axios from "axios";
const port = import.meta.env.VITE_SERVER_URL;

const Brand = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [brandData, setBrandData] = useState([]);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Fetch customer data
  const getBrandData = async () => {
    try {
      const res = await axios.get(`${port}getbranddata`);
      setBrandData(res.data);
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

  const handleBrandDelete = async () => {
    try {
      await axios.delete(`${port}deletebranddata/${deleteId}`);
      getBrandData();
      notifySuccess("Brand Deleted Successfully");
    } catch (error) {
      console.error("Error deleting brand:", error);
    }
    closeDeleteModal();
  };

  useEffect(() => {
    getBrandData();
  }, []);

  const handleNavigateEdit = (id) => {
    navigate(`/admin/edit-brand/${id}`);
  };

  const handleNavigateView = (id) => {
    navigate(`/admin/view-brand/${id}`);
  };
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Filter data based on active tab
  const filteredData = brandData.filter((brand) => {
    if (activeTab === "All") return true;
    if (activeTab === "Active") return parseInt(brand.status, 10) === 1;
    if (activeTab === "Disable") return parseInt(brand.status, 10) === 0;
    return true;
  });

  // Pagination logic on filtered data
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const brands = filteredData.slice(startIndex, endIndex);
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
              activeTab === "Disable" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Disable")}
          >
            Disable
          </button>
        </div>

        <div className="dashboard-table-container full-height">
          <table>
            <thead>
              <tr>
                <th style={{ width: "20%" }}>Brand Name</th>
                <th style={{ width: "40%" }}>Description</th>
                <th style={{ width: "15%" }}>Created Date</th>
                <th style={{ width: "10%" }}>Status</th>
                <th style={{ width: "15%" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {brands.map((brand, index) => (
                <tr key={index}>
                  <td className="product-info admin-profile">
                    <img src={`/upload/${brand.image}`} alt="brand_image" />
                    <span>{brand.name}</span>
                  </td>
                  <td>{brand.description.slice(0, 40)}</td>
                  <td>
                    {new Date(brand.created_date).toLocaleDateString("en-GB")}
                  </td>
                  <td>
                    <span
                      className={`status ${
                        brand.status === 1 ? "published" : "out-of-stock"
                      }`}
                    >
                      {brand.status === 1 ? "Active" : "Disable"}
                    </span>
                  </td>
                  <td className="actions">
                    <IoPencil
                      title="Edit"
                      onClick={() => handleNavigateEdit(brand.id)}
                    />
                    <IoIosEye
                      title="View"
                      onClick={() => handleNavigateView(brand.id)}
                    />
                    <MdDeleteForever
                      title="Delete"
                      onClick={() => openDeleteModal(brand.id)}
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
          title="Brand"
          onCancel={closeDeleteModal}
          onDelete={handleBrandDelete}
        />
      )}
    </>
  );
};

export default Brand;
