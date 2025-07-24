import { useEffect, useState } from "react";
import "../../../assets/css/client/product-listing.css";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import axios from "axios";
import "../../../assets/css/main.css";
import { useNavigate } from "react-router-dom";
import Pagination from "../../../pages/admin/layout/Pagination";
import noProductFoundImage from "../../../assets/image/no-product-found.png";

const port = import.meta.env.VITE_SERVER_URL;

const ProductListing = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000);
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("popular");

  const navigate = useNavigate();
  const itemsPerPage = 16;

  // Fetch categories and products
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

  const handleTabClick = (category) => {
    setActiveTab(category);
    setCurrentPage(1);
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    if (/^\d*$/.test(value)) {
      if (name === "min-price") setMinPrice(value);
      if (name === "max-price") setMaxPrice(value);
      setSelectedPriceRange("");
      setCurrentPage(1);
    }
  };

  const handlePriceRangeChange = (e) => {
    const value = e.target.value;
    setSelectedPriceRange(value);
    switch (value) {
      case "all":
        setMinPrice(0);
        setMaxPrice(100000);
        break;
      case "under-10000":
        setMinPrice(0);
        setMaxPrice(9999);
        break;
      case "10000-20000":
        setMinPrice(10000);
        setMaxPrice(20000);
        break;
      case "20000-30000":
        setMinPrice(20000);
        setMaxPrice(30000);
        break;
      case "40000-50000":
        setMinPrice(40000);
        setMaxPrice(50000);
        break;
      case "above-50000":
        setMinPrice(50001);
        setMaxPrice(500000);
        break;
      default:
        break;
    }
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
    setCurrentPage(1);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const filteredProducts = productData
    .filter((product) => {
      const price = parseFloat(product.price);
      return (
        (!activeTab || product.cate_id === activeTab) &&
        price >= minPrice &&
        price <= maxPrice &&
        (product.name.toLowerCase().includes(searchQuery) ||
          product.slogan.toLowerCase().includes(searchQuery))
      );
    })
    .sort((a, b) => {
      if (sortOption === "price-low") return a.price - b.price;
      if (sortOption === "price-high") return b.price - a.price;
      return 0;
    });

  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid productlisting-page-main">
        <div className="container product-container">
          <aside className="sidebar">
            {/* Category Filter */}
            <h6>Category</h6>
            <div className="radio-group">
              <label
                className={activeTab === null ? "active" : ""}
                onClick={() => handleTabClick(null)}
              >
                <input
                  type="radio"
                  name="category"
                  value="all"
                  checked={activeTab === null}
                  readOnly
                />
                <span className="custom-radio"></span> All
              </label>
              {categoryData.map((category, index) => (
                <label
                  key={index}
                  className={activeTab === category.id ? "active" : ""}
                  onClick={() => handleTabClick(category.id)}
                >
                  <input
                    type="radio"
                    name="category"
                    value={category.id}
                    checked={activeTab === category.id}
                    readOnly
                  />
                  <span className="custom-radio"></span> {category.name}
                </label>
              ))}
            </div>

            {/* Price Inputs */}
            <div className="price-range">
              <p>Price Range</p>
              <div className="input">
                <input
                  style={{ padding: "8px 10px" }}
                  type="text"
                  name="min-price"
                  placeholder="Min Price"
                  value={minPrice}
                  onChange={handlePriceChange}
                />
                <input
                  style={{ padding: "8px 10px" }}
                  type="text"
                  name="max-price"
                  placeholder="Max Price"
                  value={maxPrice}
                  onChange={handlePriceChange}
                />
              </div>
            </div>

            {/* Price Range Radio */}
            <div className="radio-group">
              {[
                { label: "All Price", value: "all" },
                { label: "Under 10000₹", value: "under-10000" },
                { label: "10000₹ - 20000₹", value: "10000-20000" },
                { label: "20000₹ - 30000₹", value: "20000-30000" },
                { label: "40000₹ - 50000₹", value: "40000-50000" },
                { label: "Above 50000₹", value: "above-50000" },
              ].map(({ label, value }) => (
                <label
                  key={value}
                  className={selectedPriceRange === value ? "active" : ""}
                >
                  <input
                    type="radio"
                    name="price"
                    value={value}
                    checked={selectedPriceRange === value}
                    onChange={handlePriceRangeChange}
                  />
                  <span className="custom-radio"></span> {label}
                </label>
              ))}
            </div>
          </aside>

          {/* Product Grid + Controls */}
          <div className="products-with-searchbar">
            <nav className="product-navbar">
              <div className="search-select">
                <input
                  type="text"
                  placeholder="Search..."
                  className="search-input"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />

                <div className="select" style={{ whiteSpace: "nowrap" }}>
                  <h6>Sort By:</h6>
                  <div className="custom-dropdown">
                    <select
                      className="sort-dropdown"
                      value={sortOption}
                      onChange={handleSortChange}
                    >
                      <option value="popular">Popular</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="price-low">Price: Low to High</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <p className="result">
                  <strong>
                    {paginatedProducts.length}/{totalItems}
                  </strong>
                  &nbsp;Results Loaded
                </p>
              </div>
            </nav>

            {/* Product Cards */}
            <div
              className={`product-items ${
                paginatedProducts.length === 0 ? "no-grid" : ""
              }`}
            >
              {paginatedProducts.length > 0 ? (
                paginatedProducts.map((product, index) => (
                  <div
                    className="product-card"
                    key={index}
                    onClick={() => handleProductClick(product.id)}
                  >
                    <div className="product-img">
                      <img
                        src={`/upload/${product.image}`}
                        alt="product_image"
                      />
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
                <div className="no-product-found-wrapper">
                  <img
                    src={noProductFoundImage}
                    alt="No Products Found"
                    className="no-product-found-img"
                  />
                </div>
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
      </div>
      <Footer />
    </>
  );
};

export default ProductListing;
