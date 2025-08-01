import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../context/CartContext";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io"; // Import both icons
import { FiShoppingCart } from "react-icons/fi";
import { useWishlist } from "../../../context/WishlistContext";

const port = import.meta.env.VITE_SERVER_URL;

const ProductCategory = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [categoryData, setCategoryData] = useState([]);
  const [productData, setProductData] = useState([]);
  const { addToCart } = useCart();
  const [addedProductIds, setAddedProductIds] = useState([]);
  const { addToWishlist, removeFromWishlist, isWishlisted, wishlist } =
    useWishlist();

  const toggleWishlist = (product) => {
    isWishlisted(product.id)
      ? removeFromWishlist(product.id)
      : addToWishlist(product);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    if (!addedProductIds.includes(product.id)) {
      setAddedProductIds((prev) => [...prev, product.id]);
      setTimeout(() => {
        setAddedProductIds((prev) => prev.filter((id) => id !== product.id));
      }, 2000); // animation lasts for 2 seconds
    }
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

  // Filter products based on the active category
  const filteredProducts = productData.filter(
    (product) => product.cate_id === activeTab
  );
  return (
    <>
      <section
        className="container-fluid product-category-section"
        style={{ backgroundColor: "var(--light-white-color)" }}
      >
        <div className="container padding-main">
          <div className="product-category-tab">
            <div className="product-category-header">
              <div className="tab-container">
                {categoryData.length > 0 ? (
                  categoryData.map((category, index) => (
                    <div
                      key={index}
                      className={`tab ${
                        activeTab === category.id ? "active" : ""
                      }`}
                      onClick={() => handleTabClick(category.id)}
                    >
                      {category.name}
                    </div>
                  ))
                ) : (
                  <div>Loading categories...</div>
                )}
              </div>
            </div>
            <div className="product-category-image-with-price">
              {filteredProducts.slice(0, 5).map((product, index) => (
                <div key={index} className="product-card">
                  <div
                    className="heart-icon"
                    onClick={() => toggleWishlist(product)}
                    style={{
                      color: isWishlisted(product.id) ? "blue" : "#bbb",
                    }}
                  >
                    {isWishlisted(product.id) ? (
                      <IoMdHeart />
                    ) : (
                      <IoMdHeartEmpty />
                    )}
                  </div>

                  <img
                    src={`/upload/${product.image}`}
                    alt={product.slogan}
                    className="product-image"
                  />
                  <div className="about-categorty-products">
                    <h6 className="product-name">{product.slogan}</h6>
                    <p className="product-price">${product.price}</p>
                  </div>

                  <button
                    className={`primary-btn homepage-add-to-cart-btn fancy-cart-btn ${
                      addedProductIds.includes(product.id) ? "added" : ""
                    }`}
                    onClick={() => handleAddToCart(product)}
                  >
                    {addedProductIds.includes(product.id) ? (
                      "✓ Added"
                    ) : (
                      <>
                        <FiShoppingCart /> Add to cart
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCategory;
