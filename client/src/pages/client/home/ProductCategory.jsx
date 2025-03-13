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
            <div className="tab-container">
              <div className="tab active">Monitor</div>
              <div className="tab">Laptops</div>
              <div className="tab">Keyboard</div>
              <div className="tab">Mouse</div>
              <div className="tab">Printer</div>
              <div className="tab">Headphone</div>
            </div>
            <div className="product-category-image-with-price">
              <div className="category-products">
                <img src={ProductImage} alt="Image" />
                <div className="about-categorty-products">
                  <h5 className="product-name">iphone 14pro</h5>
                  <span className="product-price">₹67000</span>
                </div>
              </div>
              <div className="category-products">
                <img src={ProductImage} alt="Image" />
                <div className="about-categorty-products">
                  <h5 className="product-name">iphone 14pro</h5>
                  <span className="product-price">₹67000</span>
                </div>
              </div>
              <div className="category-products">
                <img src={ProductImage} alt="Image" />
                <div className="about-categorty-products">
                  <h5 className="product-name">iphone 14pro</h5>
                  <span className="product-price">₹67000</span>
                </div>
              </div>
              <div className="category-products">
                <img src={ProductImage} alt="Image" />
                <div className="about-categorty-products">
                  <h5 className="product-name">iphone 14pro</h5>
                  <span className="product-price">₹67000</span>
                </div>
              </div>
              <div className="category-products">
                <img src={ProductImage} alt="Image" />
                <div className="about-categorty-products">
                  <h5 className="product-name">iphone 14pro</h5>
                  <span className="product-price">₹67000</span>
                </div>
              </div>
            </div>
            <button type="button" className="product-view-button primary-btn" onClick={()=> handleNavigateProducts()} >
              View All Products
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCategory;
