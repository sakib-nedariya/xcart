import React, { useEffect, useState } from "react";
import "../../../assets/css/client/product-listing.css";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import axios from "axios";
import "../../../assets/css/main.css";
import { useNavigate } from "react-router-dom";
import Pagination from "../../../pages/admin/layout/Pagination";

const port = import.meta.env.VITE_SERVER_URL;

const ProductListing = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000);
  

  useEffect(() => {
    const getCategoryData = async () => {
      try {
        const res = await axios.get(`${port}getcategorydata`);
        setCategoryData(res.data);
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    };

    const getProductData = async () => {
      try {
        const res = await axios.get(`${port}getproductdata`);
        setProductData(res.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    getCategoryData();
    getProductData();
  }, []);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleTabClick = (category) => {
    setActiveTab(category);
    setCurrentPage(1); // Reset pagination when changing category
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    if (name === "min-price") setMinPrice(value);
    if (name === "max-price") setMaxPrice(value);
  };

  const filterProducts = productData.filter((product) => {
    const price = parseFloat(product.price);
    return (
      (!activeTab || product.cate_id === activeTab) &&
      price >= minPrice && price <= maxPrice
    );
  });


  // Pagination logic
  const totalItems = productData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = productData.slice(startIndex, endIndex);

  // Filter products based on the active category
  const filteredProducts = activeTab
    ? paginatedProducts.filter((product) => product.cate_id === activeTab)
    : paginatedProducts;

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`); // Navigate to ProductView page with product ID
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid product-container">
        <aside className="sidebar">
          <h6>Category</h6>
          <div className="radio-group">
          <label className={activeTab === null ? "active" : ""} onClick={() => handleTabClick(null)}>
              <input type="radio" name="category" value="all" />
              <span className="custom-radio"></span> All
            </label>
            {categoryData.length > 0 ? (
              categoryData.map((category, index) => (
                <label
                  key={index}
                  className={activeTab === category.id ? "active" : ""}
                  onClick={() => handleTabClick(category.id)}
                >
                  <input type="radio" name="category" value={category.id} />
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
              <input type="number" name="min-price" placeholder="Min Price" value={minPrice} onChange={handlePriceChange} />
              <input type="number" name="max-price" placeholder="Max Price" value={maxPrice} onChange={handlePriceChange} />
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
              <input type="text" placeholder="Search..." className="search-input" />
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
                <strong>{filteredProducts.length}/{totalItems}</strong> Results Loaded
              </p>
            </div>
          </nav>

          <div className="product-items">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <div
                  className="product-card"
                  key={index}
                  onClick={() => handleProductClick(product.id)}
                >
                  <div className="product-img">
                    <img src={`/upload/${product.image}`} alt="product_image" />
                  </div>
                  <div className="product-info">
                    <h6 className="slogan">{product.slogan}</h6>
                    <div className="price">
                      <span className="old-price">₹69999</span>
                      <span className="new-price">₹{product.price}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No products found...</p>
            )}
          </div>

          {/* Pagination */}
          {totalItems > itemsPerPage && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              startIndex={startIndex}
              endIndex={endIndex}
              totalItems={totalItems}
            />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductListing;
