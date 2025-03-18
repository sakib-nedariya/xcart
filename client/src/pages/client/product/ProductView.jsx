import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../../assets/css/client/product-view.css";
import "../../../assets/css/main.css";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { BsBookmark } from "react-icons/bs";
import axios from "axios";

const port = import.meta.env.VITE_SERVER_URL;

const ProductView = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState([]); // Store data as an array

  const getProductData = async () => {
    try {
      const res = await axios.get(`${port}getproductdatawithid/${id}`);
      setProductData(res.data); // API returns an array
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getProductData();
  }, [id]);

  if (productData.length === 0) {
    return <div>Loading...</div>; // Show loading state while fetching data
  }

  return (
    <>
      <Navbar />
      <div className="container-fluid bg-color">
        <div className="container padding-main product-view-container">
          {productData.map((product) => (
            <div key={product.id}>
              <div className="product-view-section">
                <div className="view-page-image-main-div">
                  <div className="view-image">
                    <img
                      src={product.image ? `/upload/${product.image}` : "/path-to-default-image/default.png"}
                      alt={product.name || "Product Image"}
                    />
                  </div>
                </div>
                <div className="view-product-content">
                  <h5>{product.name}</h5>
                  <div className="view-product-info">
                    <p>ID: <b>{product.name}</b></p>
                    <p>Availability: <b>{product.status ? "In Stock" : "Out of Stock"}</b></p>
                    <p>Brand: <b>{product.id}</b></p>
                    <p>Category: <b>{product.cate_id}</b></p>
                  </div>
                  <div className="price-discount">
                    <div className="price">
                      <span className="new-price">₹{product.price}</span>
                      <span className="old-price">₹1,20,000</span>
                    </div>
                    <div className="discount">
                      <span>{product.discount}% OFF</span>
                    </div>
                  </div>

                  <div className="form-group">
                <label htmlFor="memory">Memory</label>
                <select name="memory" id="memory">
                  <option value="">{product.memory}</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="storage">Storage</label>
                <select name="size" id="size">
                  <option value="">{product.storage}</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="size">Size</label>
                <select name="storage" id="storage">
                  <option value="">1TB SSD Storage</option>
                  <option value="">3TB SSD Storage</option>
                  <option value="">5TB SSD Storage</option>
                </select>
              </div>

              <div className="cart-actions">
                <div class="product-actions">
                  <div class="quantity-selector">
                    <span>-</span>
                    <span>01</span>
                    <span>+</span>
                  </div>

                  <button class="primary-btn">Add To Cart</button>
                </div>

                <div className="buy-now-icon">
                  <button class="primary-btn buy-now">Buy Now</button>
                  <button class="bookmark-btn">
                    <BsBookmark size={18} />
                  </button>
                </div>
              </div>
                </div>
              </div>

              <div className="content">
                <h6>Description</h6>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductView;