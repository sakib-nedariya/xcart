import React, { useState } from "react";
import Navbar from "../layout/Navbar";
import UserSidebar from "./UserSidebar";
import "../../../assets/css/client/userDashboard/wishlist.css";
import { MdOutlineCancel } from "react-icons/md";
import ShoppingCartProduct from "../../../assets/image/shopping-cart.png";
import Footer from "../layout/Footer";

const WishList = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid userdashboard_main">
        <div className="container userdashboard_flex padding-main">
          <UserSidebar />
          <div className="userdashboard_main_content_div userdashboard_main_border">
            <h6>Wishlist</h6>
            <table>
              <thead>
                <tr>
                  <th>Products</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Action</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="userdashboard_inner_content_div">
                    <img src={ShoppingCartProduct} alt="MacBook" />
                    <span className="shopping-cart-product-name">
                      2020 Apple MacBook Pro with App...
                    </span>
                  </td>
                  <td>
                    <span className="product-old-price">₹120000</span>
                    <span className="product-new-price">₹89000</span>
                  </td>
                  <td className="product-in-stock">In Stock</td>
                  <td>
                    <button className="primary-btn wishlist_add_to_cart_btn ">
                      Add to Cart
                    </button>
                  </td>
                  <td>
                    <span className="product-remove-btn">
                      <MdOutlineCancel />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="userdashboard_inner_content_div">
                    <img src={ShoppingCartProduct} alt="MacBook" />
                    <span className="shopping-cart-product-name">
                      2020 Apple MacBook Pro with App...
                    </span>
                  </td>
                  <td>
                    <span className="product-old-price">₹120000</span>
                    <span className="product-new-price">₹89000</span>
                  </td>
                  <td className="product-in-stock">In Stock</td>
                  <td>
                    <button className="primary-btn wishlist_add_to_cart_btn ">
                      Add to Cart
                    </button>
                  </td>
                  <td>
                    <span className="product-remove-btn">
                      <MdOutlineCancel />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="userdashboard_inner_content_div">
                    <img src={ShoppingCartProduct} alt="MacBook" />
                    <span className="shopping-cart-product-name">
                      2020 Apple MacBook Pro with App...
                    </span>
                  </td>
                  <td>
                    <span className="product-old-price">₹120000</span>
                    <span className="product-new-price">₹89000</span>
                  </td>
                  <td className="product-in-stock">In Stock</td>
                  <td>
                    <button className="primary-btn wishlist_add_to_cart_btn ">
                      Add to Cart
                    </button>
                  </td>
                  <td>
                    <span className="product-remove-btn">
                      <MdOutlineCancel />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="userdashboard_inner_content_div">
                    <img src={ShoppingCartProduct} alt="MacBook" />
                    <span className="shopping-cart-product-name">
                      2020 Apple MacBook Pro with App...
                    </span>
                  </td>
                  <td>
                    <span className="product-old-price">₹120000</span>
                    <span className="product-new-price">₹89000</span>
                  </td>
                  <td className="product-out-of-stock">Out of Stock</td>
                  <td>
                    <button className="primary-btn wishlist_add_to_cart_btn ">
                      Add to Cart
                    </button>
                  </td>
                  <td>
                    <span className="product-remove-btn">
                      <MdOutlineCancel />
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WishList;
