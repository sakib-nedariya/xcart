import React, { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import { IoArrowBackSharp } from "react-icons/io5";
import default_profile from "../../../assets/image/default_profile.png";
import Sidebar from "../layout/Sidebar";
import Navbar from "../layout/Navbar";
import axios from "axios";
const port = import.meta.env.VITE_SERVER_URL;

const ViewProduct = () => {
  const { id } = useParams();
  const [brandData, setBrandData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [productData, setProductData] = useState({
    brand_id: "",
    cate_id: "",
    slogan: "",
    name: "",
    description: "",
    image: "",
    price: "",
    discount: "",
    memory: "",
    storage: "",
    status: "",
  });

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
      const res = await axios.get(`${port}getproductdatawithid/${id}`);
      const fetchedData = res.data[0];
      setProductData({
        ...fetchedData,
      });
      console.log(productData);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getCategoryData();
    getBrandData();
    getProductData();
  }, [id]);

  return (
    <>
      <Sidebar />
      <Navbar />
      <main className="admin-panel-header-div">
        <div
          className="admin-dashboard-main-header"
          style={{ marginBottom: "24px" }}
        >
          <div>
            <h5>View Category</h5>
            <div className="admin-panel-breadcrumb">
              <Link to="/admin/dashboard" className="breadcrumb-link active">
                Dashboard
              </Link>
              <IoMdArrowDropright />
              <Link to="/admin/category" className="breadcrumb-link active">
                Category List
              </Link>
              <IoMdArrowDropright />
              <span className="breadcrumb-text">View Category</span>
            </div>
          </div>
          <div className="admin-panel-header-add-buttons">
            <NavLink
              to="/admin/product"
              className="primary-btn dashboard-add-product-btn"
            >
              <IoArrowBackSharp /> Back
            </NavLink>
          </div>
        </div>
        <div className="dashboard-add-content-card-div">
          <div className="dashboard-add-content-left-side">
            <div className="dashboard-add-content-card">
              <h6>General Information</h6>
              <div className="add-product-form-container">
                <label htmlFor="product-name">Product Name</label>
                <input
                  type="text"
                  id="product-name"
                  name="name"
                  value={productData.name}
                  placeholder="Type product name here..."
                />
                <label htmlFor="product-slogan">Slogan</label>
                <input
                  type="text"
                  id="product-slogan"
                  name="slogan"
                  value={productData.slogan}
                  placeholder="Type product slogan here..."
                />
                <label htmlFor="product-description">Description</label>
                <textarea
                  id="product-description"
                  name="description"
                  value={productData.description}
                  placeholder="Type product description here..."
                ></textarea>
              </div>
            </div>

            <div className="dashboard-add-content-card">
              <h6>Media</h6>
              <div className="add-product-form-container">
                <label htmlFor="label-for-input-textarea photo">Photo</label>
                <div className="add-product-upload-container">
                  <div className="add-product-upload-icon">
                    {productData.image ? (
                      <img
                        src={`/upload/${productData.image}`}
                        alt="Image"
                        width="100"
                      />
                    ) : (
                      <img
                        src={default_profile}
                        alt="Default Profile"
                        width="100"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="dashboard-add-content-card">
              <h6>Pricing</h6>
              <div className="add-product-form-container">
                <label htmlFor="product-price">Base Price</label>
                <input
                  type="text"
                  id="product-price"
                  name="price"
                  value={productData.price}
                  placeholder="Type base price here..."
                />
                <label htmlFor="product-discount">
                  Discount Percentage (%)
                </label>
                <input
                  type="text"
                  id="product-discount"
                  name="discount"
                  value={productData.discount}
                  placeholder="Type discount percentage..."
                />
              </div>
            </div>
          </div>

          <div className="dashboard-add-content-right-side">
            <div className="dashboard-add-content-card">
              <h6>Brand & Category</h6>
              <div className="add-product-form-container">
                <label htmlFor="brand">Selected Brand</label>
                <select
                  id="brand_id"
                  name="brand_id"
                  value={productData.brand_id}
                  disabled
                >
                  <option value="">Select Brand</option>
                  {brandData.map((brand) => (
                    <option key={brand.id} value={brand.id}>
                      {brand.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="add-product-form-container">
                <label htmlFor="label-for-input-textarea product-name">
                  Selected Category
                </label>
                <select
                  id="category_id"
                  name="cate_id"
                  value={productData.cate_id}
                disabled
                >
                  <option value="">Select Category</option>
                  {categoryData.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="dashboard-add-content-card">
              <h6>Memory & Storage</h6>
              <div className="add-product-form-container">
                <label htmlFor="memory">Memory (RAM)</label>
                <input
                  type="text"
                  id="memory"
                  name="memory"
                  value={productData.memory}
                  placeholder="Memory"
                />
                <label htmlFor="storage">Storage</label>
                <input
                  type="text"
                  id="storage"
                  name="storage"
                  value={productData.storage}
                  placeholder="Storage"
                />
              </div>
            </div>

            <div className="dashboard-add-content-card">
              <h6>Status</h6>
              <div className="add-product-form-container">
                <label htmlFor="status">Product Status</label>
                <select id="status" name="status" value={productData.status}>
                  <option value="1">Published</option>
                  <option value="2">Low Stock</option>
                  <option value="3">Draft</option> {/* Fixed from "Draf" */}
                  <option value="0">Out of Stock</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ViewProduct;
