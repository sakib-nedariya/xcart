import React from "react";
import { useNavigate } from "react-router-dom";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import { MdOutlineCancel } from "react-icons/md";
import ShoppingCartProduct from "../../../assets/image/shopping-cart.png";
import "../../../assets/css/client/shoppingcart.css";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

const ShoppingCart = () => {

  const navigate = useNavigate();

  const handlecheckoutpagenavigate = ()=>{
    navigate('/checkout');
  }

  return (
    <>
    <Navbar/>
      <section className="container-fluid shopping-cart-section">
        <div className="container padding-main shopping-cart">
          <div className="shopping-cart-container">
            <h6>Shopping Card</h6>
            <table>
              <thead>
                <tr>
                  <th>Products</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Sub-Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="shopping-cart-container-product">
                    <span className="product-remove-btn">
                      <MdOutlineCancel />
                    </span>
                    <img src={ShoppingCartProduct} alt="image" />
                    <span className="shopping-cart-product-name">
                      2020 Apple MacBook Pro with...
                    </span>
                  </td>
                  <td>
                    <span className="product-old-price">₹120000</span>
                    <span className="product-new-price">₹89000</span>
                  </td>
                  <td>
                    <div className="product_quantity">
                      <HiMinusSm />
                      <span>01</span>
                      <HiPlusSm />
                    </div>
                  </td>
                  <td className="product-last-price">₹89000</td>
                </tr>
                <tr>
                  <td className="shopping-cart-container-product">
                    <span className="product-remove-btn">
                      <MdOutlineCancel />
                    </span>
                    <img src={ShoppingCartProduct} alt="image" />
                    <span className="shopping-cart-product-name">
                      iPhone 11 Pro (256 GB) - Gray
                    </span>
                  </td>
                  <td>
                    <span className="product-old-price">₹120000</span>
                    <span className="product-new-price">₹89000</span>
                  </td>
                  <td>
                    <div className="product_quantity">
                      <HiMinusSm />
                      <span>01</span>
                      <HiPlusSm />
                    </div>
                  </td>
                  <td className="product-last-price">₹32999</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="shopping-cart-total-price-details">
            <div className="shopping-cart-price-card">
              <h6>Card Totals</h6>
              <div className="shopping-cart-price-row">
                <span>Sub-total</span>
                <span className="shopping-cart-price">₹121,999</span>
              </div>
              <div className="shopping-cart-price-row">
                <span>Shipping</span>
                <span className="shopping-cart-price">Free</span>
              </div>
              <div className="shopping-cart-price-row">
                <span>Discount</span>
                <span className="shopping-cart-price">₹999</span>
              </div>
              <div className="shopping-cart-price-row">
                <span>Tax</span>
                <span className="shopping-cart-price">₹2,999</span>
              </div>
              <div className="shopping-cart-price-row product-total-price">
                <span>Total</span>
                <span>
                  <b>₹123,999</b>
                </span>
              </div>
              <button className="shopping-cartcheckout-btn primary-btn" onClick={()=>handlecheckoutpagenavigate()}>
                PROCEED TO CHECKOUT
              </button>
            </div>
            <div className="shopping-cart-price-card coupon-code">
              <h6>Coupon Code</h6>
              <input
                type="text"
                className="coupon-input"
                placeholder="Coupon Code"
              />
              <button className="apply-coupon-btn secondary-btn">
                APPLY COUPON
              </button>
            </div>
          </div>

        </div>
      </section>
      <Footer/>
    </>
  );
};

export default ShoppingCart;
