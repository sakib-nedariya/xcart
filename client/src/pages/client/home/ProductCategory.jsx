import React from "react";
import ProductImage from "../../../assets/image/product-image.png";
import { useNavigate } from "react-router-dom";

const ProductCategory = () => {

const navigate = useNavigate();

const handleNavigateProducts = () =>{
  navigate('/products')
};

  return (
    <>
      <section className="container-fluid product-category-section">
        <div className="container padding-main">
          <h2>Available Xcart Products</h2>
          <div className="product-category-tab">
            <div class="tab-container">
              <div class="tab active">Monitor</div>
              <div class="tab">Laptops</div>
              <div class="tab">Keyboard</div>
              <div class="tab">Mouse</div>
              <div class="tab">Printer</div>
              <div class="tab">Headphone</div>
            </div>
            <div className="product-category-image-with-price">
              <div class="category-products">
                <img src={ProductImage} alt="Image" />
                <div className="about-categorty-products">
                  <h5 className="product-name">iphone 14pro</h5>
                  <span className="product-price">₹67000</span>
                </div>
              </div>
              <div class="category-products">
                <img src={ProductImage} alt="Image" />
                <div className="about-categorty-products">
                  <h5 className="product-name">iphone 14pro</h5>
                  <span className="product-price">₹67000</span>
                </div>
              </div>
              <div class="category-products">
                <img src={ProductImage} alt="Image" />
                <div className="about-categorty-products">
                  <h5 className="product-name">iphone 14pro</h5>
                  <span className="product-price">₹67000</span>
                </div>
              </div>
              <div class="category-products">
                <img src={ProductImage} alt="Image" />
                <div className="about-categorty-products">
                  <h5 className="product-name">iphone 14pro</h5>
                  <span className="product-price">₹67000</span>
                </div>
              </div>
            </div>
            <button className="product-view-button primary-btn" onClick={()=> handleNavigateProducts()} >
              View All Products
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCategory;
