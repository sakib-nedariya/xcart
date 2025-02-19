import React from "react";
import Sidebar from "../layout/Sidebar";
import Navbar from "../layout/Navbar";
// import "../../../assets/css/admin/product.css"
import { IoMdArrowDropright } from "react-icons/io";
import { MdSave } from "react-icons/md";
import { HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";

const AddProduct = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <main className="admin-panel-header-div">
        <div className="admin-dashboard-main-header">
          <div>
            <h5>Product</h5>
            <div className="admin-panel-breadcrumb">
              <Link to="/dashboard" className="breadcrumb-link active">
                Dashboard
              </Link>
              <IoMdArrowDropright />
              <Link to="/product" className="breadcrumb-link active">
                Product List
              </Link>
              <IoMdArrowDropright />
              <span className="breadcrumb-text">Add Product</span>
            </div>
          </div>
          <div className="admin-panel-header-add-buttons">
            <button className="cancel-btn dashboard-add-product-btn">
              <HiXMark /> Cancel
            </button>
            <button className="primary-btn dashboard-add-product-btn">
              <MdSave /> Save Product
            </button>
          </div>
        </div>
        <div className="dashboard-add-content-card-div">
          <div className="dashboard-add-content-card first">
            <h6>General Information</h6>

            <div class="add-product-form-container">
              <label for="label-for-input-textarea product-name">Product Name</label>
              <input
                type="text"
                id="product-name"
                placeholder="Type product name here..."
              />
              <label for="label-for-input-textarea description">Description</label>
              <textarea
                id="description"
                placeholder="Type product description here..."
              ></textarea>
            </div>

          </div>
          <div className="dashboard-add-content-card second"></div>
        </div>

        <div className="dashboard-add-content-card-div">
          <div className="dashboard-add-content-card first">
            <h6>Media</h6>

            <div class="add-product-form-container">
              <label for="label-for-input-textarea photo">Photo</label>
              <div class="upload-container">
        <div class="upload-icon">
            <img src="https://cdn-icons-png.flaticon.com/512/1829/1829586.png" alt="Upload Icon"/>
        </div>
        <p class="upload-text">Drag and drop image here, or click add image</p>
        <button class="upload-btn">Add Image</button>
    </div>
            </div>
          </div>
          <div className="dashboard-add-content-card second">
          </div>
        </div>
      </main>
    </>
  );
};

export default AddProduct;
