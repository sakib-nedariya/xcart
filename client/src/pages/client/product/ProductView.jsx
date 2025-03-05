import React from "react";
import "../../../assets/css/client/product-view.css";
import "../../../assets/css/main.css";
import Viewproduct from "../../../assets/image/view-product.png";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { BsBookmark } from "react-icons/bs";

const ProductView = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid bg-color ">
        <div className="container padding-main product-view-container">
          <div className="product-view-section">
            <div className="view-page-image-main-div">
              <div className="view-image">
                <img src={Viewproduct} alt="ProductView" />
              </div>
            </div>
            <div className="view-product-content">
              <h5>
                2020 Apple MacBook Pro with Apple M1 Chip (14-inch, 16GB RAM,
                1TB SSD Storage) - Space Gray
              </h5>
              <div className="view-product-info">
                <p>
                  ID: <b>A264671</b>
                </p>
                <p>
                  Availability: <b>In Stock</b>{" "}
                </p>
                <p>
                  Brand: <b>Apple</b>
                </p>
                <p>
                  Category: <b>Macbook</b>
                </p>
              </div>
              <div className="price-discount">
                <div className="price">
                  <span className="new-price">₹99,000</span>
                  <span className="old-price">₹1,20,000</span>
                </div>
                <div className="discount">
                  <span>25% OFF</span>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="memory">Memory</label>
                <select name="memory" id="memory">
                  <option value="">16 GB Unified Memory</option>
                  <option value="">32 GB Unified Memory</option>
                  <option value="">56 GB Unified Memory</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="storage">Storage</label>
                <select name="size" id="size">
                  <option value="">14-inch liquid Retina XDR Display</option>
                  <option value="">28-inch liquid Retina XDR Display</option>
                  <option value="">32-inch liquid Retina XDR Display</option>
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
            <h6>Decription</h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductView;
