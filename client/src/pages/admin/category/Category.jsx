import React, { useState, useEffect } from "react";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import { MdDeleteForever, MdDelete } from "react-icons/md";
import DashboardProImage from "../../../assets/image/dashboard_product_img.png";
import DeleteModal from "../layout/DeleteModal";
import { IoPencil } from "react-icons/io5";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { IoIosEye } from "react-icons/io";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { notifySuccess } from "../layout/ToastMessage";
import Pagination from "../../../pages/admin/layout/Pagination";
import Breadcrumb from "../layout/Breadcrumb";
const port = import.meta.env.VITE_SERVER_URL;

const Category = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const navigate = useNavigate();
  const itemsPerPage = 10;
  const [activeTab, setActiveTab] = useState("All");
  const [brandData, setBrandData] = useState([]);
  const getBrandData = async () => {
    try {
      const res = await axios.get(`${port}getbranddata`);
      setBrandData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getCategoryData = async () => {
    try {
      const res = await axios.get(`${port}getcategorydata`);
      setCategoryData(res.data);
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

  const handleCategoryDelete = async () => {
    try {
      await Promise.all(
        selectedCategory.map((id) =>
          axios.delete(`${port}deletecategorydata/${id}`)
        )
      );
      notifySuccess("Selected Categories Deleted Successfully");
      getCategoryData();
      setSelectedCategory([]);
      closeDeleteModal();
    } catch (error) {
      console.error("Error deleting selected category:", error);
    }
  };

  useEffect(() => {
    getCategoryData();
    getBrandData();
    setSelectedCategory([]);
  }, [activeTab, currentPage]);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const allIds = category.map((p) => p.id);
      setSelectedCategory(allIds);
    } else {
      setSelectedCategory([]);
    }
  };

  const handleCheckboxChange = (id) => {
    setSelectedCategory((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((pid) => pid !== id)
        : [...prevSelected, id]
    );
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Filter data based on active tab
  const filteredData = categoryData.filter((category) => {
    if (activeTab === "All") return true;
    if (activeTab === "Active") return parseInt(category.status, 10) === 1;
    if (activeTab === "Disable") return parseInt(category.status, 10) === 0;
    return true;
  });

  // Pagination logic on filtered data
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const category = filteredData.slice(startIndex, endIndex);

  const handleNavigateEdit = (id) => {
    navigate(`/admin/edit-category/${id}`);
  };

  const handleNavigateView = (id) => {
    navigate(`/admin/view-category/${id}`);
  };

  const isAllSelected =
    category.length > 0 && selectedCategory.length === category.length;

  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="admin-panel-header-div">
        <Breadcrumb
          title="Category List"
          breadcrumbText="Category List"
          button={{ link: "/admin/add-category", text: "Add Category" }}
        />

        <div className="admin-panel-header-tabs-and-deleteall-btn">
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
          {selectedCategory.length > 0 && (
            <button
              className="admin-header-delete-btn delete-btn"
              onClick={() => setIsDeleteModalOpen(true)}
            >
              <MdDelete />
              Delete
            </button>
          )}
        </div>

        <div className="dashboard-table-container full-height">
          <table>
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    style={{ width: "16px", height: "16px" }}
                    onChange={handleSelectAll}
                    checked={isAllSelected}
                  />
                </th>
                <th>Category Name</th>
                <th>Description</th>
                <th>Brand</th>
                <th>Created Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {category.map((category, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="checkbox"
                      style={{ width: "16px", height: "16px" }}
                      checked={selectedCategory.includes(category.id)}
                      onChange={() => handleCheckboxChange(category.id)}
                    />
                  </td>
                  <td className="product-info">
                    <img src={`/upload/${category.image}`} alt="category_image" />
                    <span>{category.name}</span>
                  </td>
                  <td>{category.description.slice(0, 40)}</td>
                  {brandData.map((brand) => {
                    if (brand.id === category.brand_id) {
                      return <td>{brand.name}</td>;
                    }
                  })}
                  <td>
                    {new Date(category.created_date).toLocaleDateString(
                      "en-GB"
                    )}
                  </td>
                  <td>
                    <span
                      className={`status ${
                        category.status === 1 ? "published" : "out-of-stock"
                      }`}
                    >
                      {category.status === 1 ? "Active" : "Disable"}
                    </span>
                  </td>
                  <td className="actions">
                    <IoPencil
                      title="Edit"
                      onClick={() => handleNavigateEdit(category.id)}
                    />
                    <IoIosEye
                      title="View"
                      onClick={() => handleNavigateView(category.id)}
                    />
                    <MdDeleteForever
                      title="Delete"
                      onClick={() => openDeleteModal(category.id)}
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
          onDelete={handleCategoryDelete}
        />
      )}
    </>
  );
};

export default Category;
