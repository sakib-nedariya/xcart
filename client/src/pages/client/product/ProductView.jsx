import React from "react";
import "../../../assets/css/client/product-view.css";
import "../../../assets/css/main.css";
import Viewproduct from "../../../assets/image/view-product.png";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

const ProductView = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid bg-color">
        <div className="container padding-main product-view-container">
          <div className="view-image">
            <img src={Viewproduct} alt="ProductView" />
          </div>
          <div className="view-product-content">
            <h5>
              2020 Apple MacBook Pro with Apple M1 Chip (14-inch, 16GB RAM, 1TB
              SSD Storage) - Space Gray
            </h5>
            <div className="view-product-info">
              <div>
                <p>
                  ID: <b>A264671</b>
                </p>
              </div>
              <div>
                <p>
                  Availability: <b>In Stock</b>
                </p>
              </div>
              <div>
                <p>
                  Brand: <b>Apple</b>
                </p>
              </div>
              <div>
                <p>
                  Category: <b>Macbook</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductView;
