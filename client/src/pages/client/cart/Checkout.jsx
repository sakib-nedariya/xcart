import React, { useState } from "react";
import "../../../assets/css/client/checkout.css";
import CODImage from "../../../assets/image/CashOnDelivery.png";
import Razorpay from "../../../assets/image/razorpay.png";
import MyWallet from "../../../assets/image/MyWallet.png";
import selecteTV from "../../../assets/image/TV.png";
import selecteHeadphone from "../../../assets/image/headphone.png";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

const Checkout = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelection = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
    <Navbar/>
      <section className="container-fluid checkout-section">
        <div className="container padding-main checkout-main-div">
          <div className="checkout-container">
            <h6>Billing Information</h6>

            <form className="checkout-section-form-container">
              <div className="checkout-form-container-group">
                <div style={{ width: "25%" }}>
                  <label className="checkout-label-title">First Name</label>
                  <input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                  />
                </div>
                <div style={{ width: "25%" }}>
                  <label className="checkout-label-title">Last Name</label>
                  <input type="text" name="lastname" placeholder="Last Name" />
                </div>
                <div style={{ width: "50%" }}>
                  <label className="checkout-label-title">
                    Company Name{" "}
                    <span style={{ color: "#929FA5" }}>(Optional)</span>
                  </label>
                  <input
                    type="text"
                    name="companyname"
                    placeholder="Valudas Tech Park"
                  />
                </div>
              </div>

              <div className="checkout-form-container-group">
                <div style={{ width: "100%" }}>
                  <label className="checkout-label-title">Address</label>
                  <input type="text" name="address" placeholder="" />
                </div>
              </div>

              <div className="checkout-form-container-group">
                <div style={{ width: "25%" }}>
                  <label className="checkout-label-title">Country</label>
                  <select name="form-group countries-name">
                    <option>Select Country...</option>
                    <option>India</option>
                    <option>Australia</option>
                    <option>England</option>
                    <option>China</option>
                  </select>
                </div>
                <div style={{ width: "25%" }}>
                  <label className="checkout-label-title">Region/State</label>
                  <select name="form-group state-name">
                    <option>Select State...</option>
                    <option>Gujarat</option>
                    <option>Maharashtra</option>
                    <option>Rajasthan</option>
                    <option>Punjab</option>
                  </select>
                </div>
                <div style={{ width: "25%" }}>
                  <label className="checkout-label-title">City</label>
                  <select name="form-group city-name">
                    <option>Select City...</option>
                    <option>Ahmedabad</option>
                    <option>Surat</option>
                    <option>Vadodara</option>
                    <option>Mehsana</option>
                  </select>
                </div>
                <div style={{ width: "25%" }}>
                  <label className="checkout-label-title">Zip Code</label>
                  <input type="text" name="address" placeholder="" />
                </div>
              </div>

              <div className="checkout-form-container-group">
                <div style={{ width: "50%" }}>
                  <label className="checkout-label-title">Email</label>
                  <input type="text" name="email" placeholder="" />
                </div>
                <div style={{ width: "50%" }}>
                  <label className="checkout-label-title">Phone Number</label>
                  <input type="text" name="phonenumber" placeholder="" />
                </div>
              </div>

              <div className="checkout-section-shipping-option">
                <input type="checkbox" id="ship-different" />
                <label htmlFor="ship-different">Ship into different address</label>
              </div>
            </form>

            <div className="shopping-cart-price-card">
              <h6>Payment Option</h6>
              <div className="checkout-section-payment-options">
                <div
                  className={`option ${
                    selectedOption === "cod" ? "active" : ""
                  }`}
                  onClick={() => handleSelection("cod")}
                >
                  <img src={CODImage} alt="Cash on Delivery" />
                  <p>Cash on Delivery</p>
                  <input
                    type="radio"
                    name="payment"
                    checked={selectedOption === "cod"}
                    readOnly
                  />
                </div>

                <div
                  className={`option ${
                    selectedOption === "razorpay" ? "active" : ""
                  }`}
                  onClick={() => handleSelection("razorpay")}
                >
                  <img src={Razorpay} alt="Razorpay" />
                  <p>Razorpay</p>
                  <input
                    type="radio"
                    name="payment"
                    checked={selectedOption === "razorpay"}
                    readOnly
                  />
                </div>

                <div
                  className={`option ${
                    selectedOption === "wallet" ? "active" : ""
                  }`}
                  onClick={() => handleSelection("wallet")}
                >
                  <img src={MyWallet} alt="My Wallet" />
                  <p>My Wallet</p>
                  <input
                    type="radio"
                    name="payment"
                    checked={selectedOption === "wallet"}
                    readOnly
                  />
                </div>
              </div>
            </div>

            <div className="checkout-section-additional-information">
              <h6>Additional Information</h6>
              <div className="checkout-form-container-group">
                <div style={{ width: "100%" }}>
                  <label className="checkout-label-title">
                    Order Notes{" "}
                    <span style={{ color: "#929FA5" }}>(Optional)</span>
                  </label>
                  <textarea
                    type="text"
                    name="phonenumber"
                    placeholder="Notes about your order, e.g. special notes for delivery"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="checkout-container-order-price-summery">
            <div className="shopping-cart-price-card">
              <h6>Order Summery</h6>

              <div className="order-summery-product-list">
                <div className="order-summery-product">
                  <img src={selecteTV} alt="Image" />
                  <div className="order-summery-product-details">
                    <p className="order-summery-product-title">
                      Canon EOS 1500D DSLR Camera Body+ 18-...
                    </p>
                    <p className="order-summery-product-price">
                      1 x <span>₹70</span>
                    </p>
                  </div>
                </div>

                <div className="order-summery-product">
                  <img src={selecteHeadphone} alt="Image" />
                  <div className="order-summery-product-details">
                    <p className="order-summery-product-title">
                      Wired Over-Ear Gaming Headphones with U...
                    </p>
                    <p className="order-summery-product-price">
                      3 x <span>₹250</span>
                    </p>
                  </div>
                </div>
              </div>
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
              <button type="button" className="shopping-cartcheckout-btn primary-btn">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Checkout;
