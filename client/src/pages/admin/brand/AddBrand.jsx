import React from "react";
import Sidebar from "../layout/Sidebar";
import Navbar from "../layout/Navbar";
import { Link, NavLink } from "react-router-dom";
import { HiXMark } from "react-icons/hi2";
import { MdSave } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";

const AddBrand = () => {
  const handleButtonClick = () => {
    document.getElementById("imageInputFile").click();
  };

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
            <h5>Add Brand</h5>
            <div className="admin-panel-breadcrumb">
              <Link to="/admin/dashboard" className="breadcrumb-link active">
                Dashboard
              </Link>
              <IoMdArrowDropright />
              <Link to="/admin/brand" className="breadcrumb-link active">
                Brand List
              </Link>
              <IoMdArrowDropright />
              <span className="breadcrumb-text">Add Brand</span>
            </div>
          </div>
          <div className="admin-panel-header-add-buttons">
            <NavLink
              to="/admin/brand"
              className="cancel-btn dashboard-add-product-btn"
            >
              <HiXMark /> Cancel
            </NavLink>
            <button
              type="button"
              className="primary-btn dashboard-add-product-btn"
            >
              <MdSave /> Save Brand
            </button>
          </div>
        </div>
        <div className="dashboard-add-content-card-div">
          <div className="dashboard-add-content-left-side">
            <div className="dashboard-add-content-card">
              <h6>General Information</h6>
              <div className="add-product-form-container">
                <label htmlFor="label-for-input-textarea product-name">
                  Brand Name
                </label>
                <input
                  type="text"
                  id="product-name"
                  placeholder="Type brand name here..."
                />
                <label htmlFor="label-for-input-textarea description">
                  Description
                </label>
                <textarea
                  id="description"
                  placeholder="Type brand description here..."
                ></textarea>
              </div>
            </div>
          </div>
          <div className="dashboard-add-content-right-side">
            <div className="dashboard-add-content-card">
              <h6>Thumbnail</h6>
              <div className="add-product-form-container">
                <label htmlFor="label-for-input-textarea photo">Photo</label>
                <div className="add-product-upload-container">
                  <div className="add-product-upload-icon">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1829/1829586.png"
                      alt="Upload Icon"
                    />
                  </div>
                  <p className="add-product-upload-text">
                    Drag and drop image here, or click add image
                  </p>
                  <button
                    type="button"
                    className="add-product-upload-btn secondary-btn"
                    onClick={handleButtonClick}
                  >
                    Add Image
                  </button>
                  <input
                    type="file"
                    id="imageInputFile"
                    name="profile"
                    style={{ display: "none" }}
                  />
                </div>
              </div>
            </div>
            <div className="dashboard-add-content-card">
              <h6>Status</h6>
              <div className="add-product-form-container">
                <label htmlFor="status">Brand Status</label>
                <select id="status" name="status">
                  <option value="1">Active</option>
                  <option value="0">Disable</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AddBrand;
