import React from "react";
import "../../../assets/css/client/product-listing.css";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import product from "../../../assets/image/product-image.png";

const ProductListing = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid product-container">
        <aside className="sidebar">
          <h6>Category</h6>
          <div class="radio-group">
            <label>
              <input type="radio" name="subject" />
              <span class="custom-radio"></span> iPhone
            </label>
            <label>
              <input type="radio" name="subject" />
              <span class="custom-radio"></span> iMac
            </label>
            <label>
              <input type="radio" name="subject" />
              <span class="custom-radio"></span> Macbook
            </label>
          </div>

          <div className="price-range">
          <p>Price Range Slider</p>
          <div className="input">
            <input type="text" name="min-price" placeholder="Min Price" />
            <input type="text" name="min-price" placeholder="Min Price" />
          </div>
          </div>
          
          <div class="radio-group">
            <label>
              <input type="radio" name="price" />
              <span class="custom-radio"></span> All Price
            </label>
            <label>
              <input type="radio" name="price" />
              <span class="custom-radio"></span> Under 10000₹
            </label>
            <label>
              <input type="radio" name="price" />
              <span class="custom-radio"></span> 10000₹ - 20000₹
            </label>
            <label>
              <input type="radio" name="price" />
              <span class="custom-radio"></span> 20000₹ - 30000₹
            </label>
            <label>
              <input type="radio" name="price" />
              <span class="custom-radio"></span> 40000₹ - 50000₹
            </label>
            <label>
              <input type="radio" name="price" />
              <span class="custom-radio"></span> Above 50000₹
            </label>
          </div>
        </aside>

        <div className="products-with-searchbar">
          <nav className="product-navbar">
            <div className="search-select"> 
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
            <select className="sort-dropdown">
              <option value="popular">Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            </div>

            <div>
            <p className="result">
              <strong>20/400</strong> Results Loaded
            </p>
            </div>
          </nav>

          <div className="product-items">
            <div className="product-card">
              <div className="product-img">
                <img src={product} alt="Login" />
              </div>

              <div className="product-info">
                <h6 className="slogan">iPhone 11 Pro (256GB) - Gray</h6>
                <div className="price">
                  <span className="old-price">₹69999</span>
                  <span className="new-price">₹67999</span>
                </div>
              </div>
            </div>
            <div className="product-card">
              <div className="product-img">
                <img src={product} alt="Login" />
              </div>

              <div className="product-info">
                <h6 className="slogan">iPhone 11 Pro (256GB) - Gray</h6>
                <div className="price">
                  <span className="old-price">₹69999</span>
                  <span className="new-price">₹67999</span>
                </div>
              </div>
            </div>
            <div className="product-card">
              <div className="product-img">
                <img src={product} alt="Login" />
              </div>

              <div className="product-info">
                <h6 className="slogan">iPhone 11 Pro (256GB) - Gray</h6>
                <div className="price">
                  <span className="old-price">₹69999</span>
                  <span className="new-price">₹67999</span>
                </div>
              </div>
            </div>
            <div className="product-card">
              <div className="product-img">
                <img src={product} alt="Login" />
              </div>

              <div className="product-info">
                <h6 className="slogan">iPhone 11 Pro (256GB) - Gray</h6>
                <div className="price">
                  <span className="old-price">₹69999</span>
                  <span className="new-price">₹67999</span>
                </div>
              </div>
            </div>
            <div className="product-card">
              <div className="product-img">
                <img src={product} alt="Login" />
              </div>

              <div className="product-info">
                <h6 className="slogan">iPhone 11 Pro (256GB) - Gray</h6>
                <div className="price">
                  <span className="old-price">₹69999</span>
                  <span className="new-price">₹67999</span>
                </div>
              </div>
            </div>
            <div className="product-card">
              <div className="product-img">
                <img src={product} alt="Login" />
              </div>

              <div className="product-info">
                <h6 className="slogan">iPhone 11 Pro (256GB) - Gray</h6>
                <div className="price">
                  <span className="old-price">₹69999</span>
                  <span className="new-price">₹67999</span>
                </div>
              </div>
            </div>
            <div className="product-card">
              <div className="product-img">
                <img src={product} alt="Login" />
              </div>

              <div className="product-info">
                <h6 className="slogan">iPhone 11 Pro (256GB) - Gray</h6>
                <div className="price">
                  <span className="old-price">₹69999</span>
                  <span className="new-price">₹67999</span>
                </div>
              </div>
            </div>
            <div className="product-card">
              <div className="product-img">
                <img src={product} alt="Login" />
              </div>

              <div className="product-info">
                <h6 className="slogan">iPhone 11 Pro (256GB) - Gray</h6>
                <div className="price">
                  <span className="old-price">₹69999</span>
                  <span className="new-price">₹67999</span>
                </div>
              </div>
            </div>
            <div className="product-card">
              <div className="product-img">
                <img src={product} alt="Login" />
              </div>

              <div className="product-info">
                <h6 className="slogan">iPhone 11 Pro (256GB) - Gray</h6>
                <div className="price">
                  <span className="old-price">₹69999</span>
                  <span className="new-price">₹67999</span>
                </div>
              </div>
            </div>
            <div className="product-card">
              <div className="product-img">
                <img src={product} alt="Login" />
              </div>

              <div className="product-info">
                <h6 className="slogan">iPhone 11 Pro (256GB) - Gray</h6>
                <div className="price">
                  <span className="old-price">₹69999</span>
                  <span className="new-price">₹67999</span>
                </div>
              </div>
            </div>
            <div className="product-card">
              <div className="product-img">
                <img src={product} alt="Login" />
              </div>

              <div className="product-info">
                <h6 className="slogan">iPhone 11 Pro (256GB) - Gray</h6>
                <div className="price">
                  <span className="old-price">₹69999</span>
                  <span className="new-price">₹67999</span>
                </div>
              </div>
            </div>
            <div className="product-card">
              <div className="product-img">
                <img src={product} alt="Login" />
              </div>

              <div className="product-info">
                <h6 className="slogan">iPhone 11 Pro (256GB) - Gray</h6>
                <div className="price">
                  <span className="old-price">₹69999</span>
                  <span className="new-price">₹67999</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductListing;