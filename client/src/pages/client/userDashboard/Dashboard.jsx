import React from "react";
import Navbar from "../layout/Navbar";
import UserSidebar from "./UserSidebar";
import "../../../assets/css/client/userDashboard/dashboard.css";
import rocketImage from "../../../assets/image/Rocket.png";
import receiptImage from "../../../assets/image/Receipt.png";
import packageImage from "../../../assets/image/Package.png";
import profile from "../../../assets/image/dash-profile.png";
import Footer from "../layout/Footer";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid userdashboard_main">
        <div className="container userdashboard_flex padding-main">
          <UserSidebar />
          <div className="userdashboard_main_content_div">
            <div class="userdashboard_content_grid">
              <div class="userdashboard_content_card">
                <div class="icon-box">
                  <img src={rocketImage} class="icon" />
                </div>
                <div class="text-box">
                  <div class="dashboard_inner_content_number">154</div>
                  <div class="dashboard_inner_content_label">Total Orders</div>
                </div>
              </div>
              <div class="userdashboard_content_card">
                <div class="icon-box">
                  <img src={receiptImage} class="icon" />
                </div>
                <div class="text-box">
                  <div class="dashboard_inner_content_number">05</div>
                  <div class="dashboard_inner_content_label">
                    Pending Orders
                  </div>
                </div>
              </div>
              <div class="userdashboard_content_card">
                <div class="icon-box">
                  <img src={packageImage} class="icon" />
                </div>
                <div class="text-box">
                  <div class="dashboard_inner_content_number">149</div>
                  <div class="dashboard_inner_content_label">
                    Completed Orders
                  </div>
                </div>
              </div>
            </div>
            <div className="userdashboard_user_details">
              <h5 className="dashboard-user-name">Hello, Sakib Nedariya</h5>
              <p>
                From your account dashboard. you can easily check & view your
                <span> Recent Orders</span>, manage your
                <span> Shipping and Billing Addresses</span> and edit your
                <span> Password</span> and <span>Account Details.</span>
              </p>
            </div>
            <div className="account-info-and-billing-address">
              <div className="account-info-container">
                <h6>Account info</h6>
                <div className="user_details_content">
                  <div className="user-details" style={{ display: "flex" }}>
                    <img src={profile} alt="profile" />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <h5>Sakib Nedariya</h5>
                      <p>Palanpur, Gujarat</p>
                    </div>
                  </div>
                  <div className="user_email_and_mobile_no">
                    <p>
                      Email:<span>sakibnedariya@gmail.com</span>
                    </p>
                    <p>
                      Mobile No:<span>+918569741212</span>
                    </p>
                  </div>
                  <button className="user-profile-edit-btn">
                    Edit Account
                  </button>
                </div>
              </div>

              <div className="account-info-container">
                <h6>Billing Address</h6>
                <div className="user_details_content">
                  <div className="user_billing_name">
                    <h5>Sakib Nedariya</h5>
                    <p className="user-billing-address">
                      Mikro Grafio, 4th Gate, Calicut Pin: 678425
                    </p>
                  </div>
                  <div className="user_email_and_mobile_no">
                    <p>
                      Mobile No:<span>+918569741212</span>
                    </p>
                    <p>
                      Email:<span>sakibnedariya@gmail.com</span>
                    </p>
                  </div>
                  <button className="user-profile-edit-btn">
                    Edit Address
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Dashboard;
