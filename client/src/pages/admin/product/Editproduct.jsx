import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { HiXMark } from "react-icons/hi2";
import { MdSave } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import default_profile from "../../../assets/image/default_profile.png";
import Sidebar from "../layout/Sidebar";
import Navbar from "../layout/Navbar";
import axios from "axios";
import { notifyWarning, notifySuccess } from "../layout/ToastMessage";
const port = import.meta.env.VITE_SERVER_URL;

const EditProduct = () => {
  const { id } = useParams();
  const [brandData, setBrandData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const navigate = useNavigate();
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

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProductData({
        ...productData,
        image: file,
        profilePreview: URL.createObjectURL(file),
      });
    }
  };
  const handleButtonClick = () => {
    document.getElementById("imageInputFile").click();
  };

  const getProductData = async () => {
    try {
      const res = await axios.get(`${port}getproductdatawithid/${id}`);
      const fetchedData = res.data[0];

      setProductData({
        ...fetchedData,
      });
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  //edit data
  const saveProductData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("brand_id", productData.brand_id);
    formData.append("cate_id", productData.cate_id);
    formData.append("name", productData.name);
    formData.append("slogan", productData.slogan);
    formData.append("description", productData.description);
    formData.append("price", productData.price);
    formData.append("discount", productData.discount);
    formData.append("memory", productData.memory);
    formData.append("storage", productData.storage);
    if (productData.image) {
      formData.append("image", productData.image);
    }
    formData.append("status", productData.status);
    await axios
      .put(`${port}editproductData/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        navigate("/admin/product");
        notifySuccess("Data Updated Successfully");
      })
      .catch((error) => {
        console.log("Error adding product data:", error);
      });
  };

  useEffect(() => {
    getProductData();
    getBrandData();
    getCategoryData();
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
            <h5>Edit Product</h5>
            <div className="admin-panel-breadcrumb">
              <Link to="/admin/dashboard" className="breadcrumb-link active">
                Dashboard
              </Link>
              <IoMdArrowDropright />
              <Link to="/admin/product" className="breadcrumb-link active">
                Category List
              </Link>
              <IoMdArrowDropright />
              <span className="breadcrumb-text">Edit Product</span>
            </div>
          </div>
          <div className="admin-panel-header-add-buttons">
            <NavLink
              to="/admin/product"
              className="cancel-btn dashboard-add-product-btn"
            >
              <HiXMark /> Cancel
            </NavLink>
            <button
              type="button"
              onClick={saveProductData}
              className="primary-btn dashboard-add-product-btn"
            >
              <MdSave /> Save Product
            </button>
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
                  onChange={handleChangeInput}
                  placeholder="Type product name here..."
                />
                <label htmlFor="product-slogan">Slogan</label>
                <input
                  type="text"
                  id="product-slogan"
                  name="slogan"
                  value={productData.slogan}
                  onChange={handleChangeInput}
                  placeholder="Type product slogan here..."
                />
                <label htmlFor="product-description">Description</label>
                <textarea
                  id="product-description"
                  name="description"
                  value={productData.description}
                  onChange={handleChangeInput}
                  placeholder="Type product description here..."
                ></textarea>
              </div>
            </div>

            <div className="dashboard-add-content-card">
              <h6>Media</h6>
              <div className="add-product-form-container">
                <label htmlFor="imageInputFile">Photo</label>
                <div className="add-product-upload-container">
                  <div className="add-product-upload-icon">
                    {productData.profilePreview ? (
                      // Show the newly selected image preview
                      <img
                        src={productData.profilePreview}
                        alt="Selected Profile"
                        width="100"
                      />
                    ) : productData.image ? (
                      // Show the existing profile image if available
                      <img
                        src={`/upload/${productData.image}`}
                        alt="Selected Profile"
                        width="100"
                      />
                    ) : (
                      // Show default profile image if no profile is set
                      <img
                        src={default_profile}
                        alt="Default Profile"
                        width="100"
                      />
                    )}
                  </div>
                  <p className="add-product-upload-text">Click to edit image</p>
                  <button
                    type="button"
                    className="add-product-upload-btn secondary-btn"
                    onClick={handleButtonClick}
                  >
                    Edit Image
                  </button>
                  <input
                    type="file"
                    id="imageInputFile"
                    name="profile"
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                  />
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
                  onChange={handleChangeInput}
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
                  onChange={handleChangeInput}
                  placeholder="Type discount percentage..."
                />
              </div>
            </div>
          </div>

          <div className="dashboard-add-content-right-side">
            <div className="dashboard-add-content-card">
              <h6>Brand & Category</h6>
              <div className="add-product-form-container">
                <label htmlFor="brand">Select Brand</label>
                <select
                  id="brand"
                  name="brand_id"
                  value={productData.brand_id}
                  onChange={handleChangeInput}
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
                <label htmlFor="category">
                  Select Category
                </label>
                <select
                  id="category"
                  name="cate_id"
                  value={productData.cate_id}
                  onChange={handleChangeInput}
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
                  onChange={handleChangeInput}
                  placeholder="Memory"
                />
                <label htmlFor="storage">Storage</label>
                <input
                  type="text"
                  id="storage"
                  name="storage"
                  value={productData.storage}
                  onChange={handleChangeInput}
                  placeholder="Storage"
                />
              </div>
            </div>

            <div className="dashboard-add-content-card">
              <h6>Status</h6>
              <div className="add-product-form-container">
                <label htmlFor="status">Product Status</label>
                <select
                  id="status"
                  name="status"
                  value={productData.status}
                  onChange={handleChangeInput}
                >
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

export default EditProduct;
