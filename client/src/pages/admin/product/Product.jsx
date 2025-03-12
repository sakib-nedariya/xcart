import React, { useState, useEffect } from "react";
import { IoIosEye } from "react-icons/io";
import DeleteModal from "../layout/DeleteModal";
import DashboardProImage from "../../../assets/image/dashboard_product_img.png";
import { MdDeleteForever } from "react-icons/md";
import { IoPencil } from "react-icons/io5";
import "../../../assets/css/admin/product.css";
import Sidebar from "../layout/Sidebar";
import Navbar from "../layout/Navbar";
import axios from "axios";
import Breadcrumb from "../layout/Breadcrumb";
import Pagination from "../../../pages/admin/layout/Pagination";
import { useNavigate } from "react-router-dom";
const port = import.meta.env.VITE_SERVER_URL;

const Product = () => {
  const [activeTab, setActiveTab] = useState("All Products");
  const [brandData, setBrandData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const navigate = useNavigate();

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

  const getProductData = async () => {
    try {
      const res = await axios.get(`${port}getproductdata`);
      setProductData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getBrandData();
    getCategoryData();
    getProductData();
  }, []);

  // Delete product
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

  const handleProductDelete = async () => {
    try {
      await axios.delete(`${port}deleteproductdata/${deleteId}`);
      getProductData();
      notifySuccess("Product Deleted Successfully");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
    closeDeleteModal();
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Filter data based on active tab
  const filteredData = productData.filter((product) => {
    if (activeTab === "All Products") return true; // Fixes "All" mismatch
    if (activeTab === "Published") return parseInt(product.status, 10) === 1;
    if (activeTab === "Low Stock") return parseInt(product.status, 10) === 2;
    if (activeTab === "Draft") return parseInt(product.status, 10) === 3; // Fixed typo
    if (activeTab === "Out Of Stock") return parseInt(product.status, 10) === 0; // Fixed mismatch
    return false;
  });

  // Pagination logic on filtered data
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const product = filteredData.slice(startIndex, endIndex);

  const handleNavigateEdit = (id) => {
    navigate(`/admin/edit-product/${id}`);
  };

  const handleNavigateView = (id) => {
    navigate(`/admin/view-product/${id}`);
  };

  return (
    <>
      <Sidebar />
      <Navbar />
      <main className="admin-panel-header-div">
        <Breadcrumb
          title="Product"
          breadcrumbText="Product List"
          button={{ link: "/admin/add-product", text: "Add Product" }}
        />
        <div className="admin-panel-header-tabs">
          <button
            type="button"
            className={`admin-panel-header-tab 
                ${activeTab === "All Products" ? "active" : ""}`}
            onClick={() => setActiveTab("All Products")}
          >
            All Products
          </button>
          <button
            type="button"
            className={`admin-panel-header-tab 
                ${activeTab === "Published" ? "active" : ""}`}
            onClick={() => setActiveTab("Published")}
          >
            Published
          </button>
          <button
            type="button"
            className={`admin-panel-header-tab 
                ${activeTab === "Low Stock" ? "active" : ""}`}
            onClick={() => setActiveTab("Low Stock")}
          >
            Low Stock
          </button>
          <button
            type="button"
            className={`admin-panel-header-tab 
                ${activeTab === "Draft" ? "active" : ""}`}
            onClick={() => setActiveTab("Draft")}
          >
            Draft
          </button>
          <button
            type="button"
            className={`admin-panel-header-tab 
                ${activeTab === "Out Of Stock" ? "active" : ""}`}
            onClick={() => setActiveTab("Out Of Stock")}
          >
            Out of Stock
          </button>
        </div>

        <div className="dashboard-table-container">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Brand</th>
                <th>Category</th>
                <th>Discount</th>
                <th>Price</th>
                <th>Status</th>
                <th>Added</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {product.map((product, index) => (
                <tr key={index}>
                  <td className="product-info">
                    <img src={`/upload/${product.image}`} alt="product_image" />
                    <span>{product.slogan}</span>
                  </td>
                  {brandData.map((brand) => {
                    if (brand.id === product.brand_id) {
                      return <td>{brand.name}</td>;
                    }
                  })}
                  {categoryData.map((category) => {
                    if (category.id === product.cate_id) {
                      return <td>{category.name}</td>;
                    }
                  })}
                  <td>{product.discount}%</td>
                  <td>₹{product.price}</td>
                  <td>
                    <span
                      className={`status ${
                        product.status === 1
                          ? "published"
                          : product.status === 2
                          ? "low-stock"
                          : product.status === 3
                          ? "draft"
                          : "out-of-stock"
                      }`}
                    >
                      {product.status === 1
                        ? "Published"
                        : product.status === 2
                        ? "Low Stock"
                        : product.status === 3
                        ? "Draft"
                        : "Out of Stock"}
                    </span>
                  </td>

                  <td>
                    {new Date(product.created_date).toLocaleDateString("en-GB")}
                  </td>
                  <td className="actions">
                    <IoPencil 
                       title="View"
                       onClick={() => handleNavigateEdit(product.id)}
                    />
                    <IoIosEye
                      title="View"
                      onClick={() => handleNavigateView(product.id)}
                    />
                    <MdDeleteForever
                      title="Delete"
                      onClick={() => openDeleteModal(product.id)}
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
          onDelete={handleProductDelete}
        />
      )}
    </>
  );
};

export default Product;
