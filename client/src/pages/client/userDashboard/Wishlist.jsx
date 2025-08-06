import React, { useState } from "react";
import Navbar from "../layout/Navbar";
import UserSidebar from "./UserSidebar";
import "../../../assets/css/client/userDashboard/wishlist.css";
import { MdOutlineCancel } from "react-icons/md";
import Footer from "../layout/Footer";
import { useWishlist } from "../../../context/WishlistContext";
import noItemFound from "../../../assets/image/wishlist.jpg";

const WishList = () => {
<<<<<<< HEAD
  const getFirstImage = (image) => {
    if (Array.isArray(image)) return image[0];
    try {
      const parsed = JSON.parse(image);
      return Array.isArray(parsed) ? parsed[0] : image;
    } catch {
      return image;
    }
  };
=======
>>>>>>> 5e9d71c978b8d9b26fb0e8dcea8a09bc863a0a88
  const { wishlist, removeFromWishlist } = useWishlist();
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
<<<<<<< HEAD
                  <th></th> 
=======
                  <th></th>
>>>>>>> 5e9d71c978b8d9b26fb0e8dcea8a09bc863a0a88
                </tr>
              </thead>
              <tbody>
                {wishlist.length === 0 ? (
<<<<<<< HEAD
                  <td colSpan={5} align="center">
=======
                  <td colSpan={4} align="center">
>>>>>>> 5e9d71c978b8d9b26fb0e8dcea8a09bc863a0a88
                    <img src={noItemFound} />
                  </td>
                ) : (
                  wishlist.map((product, index) => (
                    <tr key={index}>
                      <td className="userdashboard_inner_content_div">
                        <img
<<<<<<< HEAD
                          src={`/upload/${getFirstImage(product.image)}`}
                          alt="product_image"
=======
                          src={`/upload/${product.image}`}
                          alt={product.slogan}
>>>>>>> 5e9d71c978b8d9b26fb0e8dcea8a09bc863a0a88
                        />
                        <span className="shopping-cart-product-name">
                          {product.slogan}
                        </span>
                      </td>
                      <td>
                        <span className="product-old-price">₹89000</span>
                        <span className="product-new-price">
                          ₹{product.price}
                        </span>
                      </td>
                      <td className="product-in-stock">In Stock</td>
                      <td>
                        <button className="primary-btn wishlist_add_to_cart_btn ">
                          Add to Cart
                        </button>
                      </td>
                      <td>
                        <span
                          className="product-remove-btn"
                          onClick={() => removeFromWishlist(product.id)}
                        >
                          <MdOutlineCancel />
                        </span>
                      </td>
                    </tr>
                  ))
                )}
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
