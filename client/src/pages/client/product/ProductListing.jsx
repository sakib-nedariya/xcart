import React, { useEffect, useState } from "react";
import "../../../assets/css/client/product-listing.css";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import product from "../../../assets/image/product-image.png";
import axios from "axios";

const port = import.meta.env.VITE_SERVER_URL;

const ProductListing = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [activeTab, setActiveTab] = useState(null);

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
      const res = await axios.get(`${port}getcategorydata`);
      setProductData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getCategoryData();
    getProductData();
  }, []);

  const handleTabClick = (category) => {
    setActiveTab(category);
  };

   
  return (
    <>
      <Navbar />
      <div className="container-fluid product-container">
        <aside className="sidebar">
          <h6>Category</h6>
          <div className="radio-group">
            {categoryData.length > 0 ? (
              categoryData.map((category, index) => (
                <label key={index} className={activeTab === category.id ? "active" : ""} onClick={() => handleTabClick(category.id)}>
                  <input type="radio" name="subject" value={category.id} />
                  <span className="custom-radio"></span> {category.name}
                </label>
              ))
            ) : (
              <p>Loading categories...</p>
            )}
          </div>

          <div className="price-range">
            <p>Price Range</p>
            <div className="input">
              <input type="text" name="min-price" placeholder="Min Price" />
              <input type="text" name="min-price" placeholder="Min Price" />
            </div>
          </div>

          <div className="radio-group">
            <label>
              <input type="radio" name="price" />
              <span className="custom-radio"></span> All Price
            </label>
            <label>
              <input type="radio" name="price" />
              <span className="custom-radio"></span> Under 10000₹
            </label>
            <label>
              <input type="radio" name="price" />
              <span className="custom-radio"></span> 10000₹ - 20000₹
            </label>
            <label>
              <input type="radio" name="price" />
              <span className="custom-radio"></span> 20000₹ - 30000₹
            </label>
            <label>
              <input type="radio" name="price" />
              <span className="custom-radio"></span> 40000₹ - 50000₹
            </label>
            <label>
              <input type="radio" name="price" />
              <span className="custom-radio"></span> Above 50000₹
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
              <div className="select">
                <h6>Sort By:</h6>
                <div className="custom-dropdown">
                  <select className="sort-dropdown">
                    <option value="popular">Popular</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="new">New</option>
                  </select>
                </div>
              </div>
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
            </div> <div className="product-card">
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
