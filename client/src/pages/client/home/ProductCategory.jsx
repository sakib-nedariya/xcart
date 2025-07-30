import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../context/CartContext";

const port = import.meta.env.VITE_SERVER_URL;

const ProductCategory = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [categoryData, setCategoryData] = useState([]);
  const [productData, setProductData] = useState([]);
  const navigate = useNavigate();
  const { addToCart } = useCart(); //  get from context

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const getCategoryData = async () => {
    try {
      const res = await axios.get(`${port}getcategorydata`);
      setCategoryData(res.data);
      if (res.data.length > 0) {
        setActiveTab(res.data[0].id);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getProductData = async () => {
    try {
      const res = await axios.get(`${port}getproductdata`);
      setProductData(res.data);
      console.log(res.data);
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

  const handleNavigateProducts = () => {
    navigate("/products");
  };
  console.log(activeTab);

  // Filter products based on the active category
  const filteredProducts = productData.filter(
    (product) => product.cate_id === activeTab
  );
  console.log(filteredProducts);
  return (
    <section className="container-fluid product-category-section">
      <div className="container padding-main">
        <h2>Available Xcart Products</h2>
        <div className="product-category-tab">
          <div className="tab-container">
            {categoryData.length > 0 ? (
              categoryData.map((category, index) => (
                <div
                  key={index}
                  className={`tab ${activeTab === category.id ? "active" : ""}`}
                  onClick={() => handleTabClick(category.id)}
                >
                  {category.name}
                </div>
              ))
            ) : (
              <div>Loading categories...</div>
            )}
          </div>
          <div className="product-category-image-with-price">
            {filteredProducts.length > 0 ? (
              filteredProducts.slice(0, 5).map((product, index) => (
                <div key={index} className="category-products">
                  <img src={`/upload/${product.image}`} alt="product_image" />

                  <div className="about-categorty-products">
                    <h5 className="product-name">{product.slogan}</h5>
                    <span className="product-price">₹{product.price}</span>
                  </div>
                  <button
                    className="primary-btn homepage-add-to-cart-btn"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to cart
                  </button>
                </div>
              ))
            ) : (
              <div>Loading products...</div>
            )}
          </div>
          <button
            type="button"
            className="product-view-button primary-btn"
            onClick={handleNavigateProducts}
          >
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;
