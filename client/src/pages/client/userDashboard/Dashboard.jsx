<<<<<<< HEAD
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
=======
import React from "react";
import { useNavigate } from "react-router-dom";
>>>>>>> 5e9d71c978b8d9b26fb0e8dcea8a09bc863a0a88
import Navbar from "../layout/Navbar";
import UserSidebar from "./UserSidebar";
import "../../../assets/css/client/userDashboard/dashboard.css";
import rocketImage from "../../../assets/image/Rocket.png";
import receiptImage from "../../../assets/image/Receipt.png";
import packageImage from "../../../assets/image/Package.png";
import profile from "../../../assets/image/dash-profile.png";
import Footer from "../layout/Footer";
<<<<<<< HEAD
import { useEffect } from "react";
import axios from "axios";

const port = import.meta.env.VITE_SERVER_URL;

const Dashboard = () => {
  const [userDashData, setUserDashData] = useState({});

  const id = localStorage.getItem("id");

  const fetchUserData = async () => {
    try {
      const res = await axios.get(`${port}getUserById/${id}`);
      setUserDashData(res.data[0]);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [id]);

=======

const Dashboard = () => {
>>>>>>> 5e9d71c978b8d9b26fb0e8dcea8a09bc863a0a88
  const navigate = useNavigate();

  const handleEditAccount = () => {
    navigate("/user-account-details");
  };

  const handleEditAddress = () => {
    navigate("/user-address");
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid userdashboard_main">
        <div className="container userdashboard_flex padding-main">
          <UserSidebar />
          <div className="userdashboard_main_content_div">
            <div className="userdashboard_content_grid">
              <div className="userdashboard_content_card">
                <div className="icon-box">
                  <img src={rocketImage} className="icon" alt="Total Orders" />
                </div>
                <div className="text-box">
                  <div className="dashboard_inner_content_number">154</div>
<<<<<<< HEAD
                  <div className="dashboard_inner_content_label">
                    Total Orders
                  </div>
=======
                  <div className="dashboard_inner_content_label">Total Orders</div>
>>>>>>> 5e9d71c978b8d9b26fb0e8dcea8a09bc863a0a88
                </div>
              </div>
              <div className="userdashboard_content_card">
                <div className="icon-box">
<<<<<<< HEAD
                  <img
                    src={receiptImage}
                    className="icon"
                    alt="Pending Orders"
                  />
                </div>
                <div className="text-box">
                  <div className="dashboard_inner_content_number">05</div>
                  <div className="dashboard_inner_content_label">
                    Pending Orders
                  </div>
=======
                  <img src={receiptImage} className="icon" alt="Pending Orders" />
                </div>
                <div className="text-box">
                  <div className="dashboard_inner_content_number">05</div>
                  <div className="dashboard_inner_content_label">Pending Orders</div>
>>>>>>> 5e9d71c978b8d9b26fb0e8dcea8a09bc863a0a88
                </div>
              </div>
              <div className="userdashboard_content_card">
                <div className="icon-box">
<<<<<<< HEAD
                  <img
                    src={packageImage}
                    className="icon"
                    alt="Completed Orders"
                  />
                </div>
                <div className="text-box">
                  <div className="dashboard_inner_content_number">149</div>
                  <div className="dashboard_inner_content_label">
                    Completed Orders
                  </div>
=======
                  <img src={packageImage} className="icon" alt="Completed Orders" />
                </div>
                <div className="text-box">
                  <div className="dashboard_inner_content_number">149</div>
                  <div className="dashboard_inner_content_label">Completed Orders</div>
>>>>>>> 5e9d71c978b8d9b26fb0e8dcea8a09bc863a0a88
                </div>
              </div>
            </div>

            <div className="userdashboard_user_details">
<<<<<<< HEAD
              <h5 className="dashboard-user-name">
                Hello, {userDashData.first_name} {userDashData.last_name}
              </h5>
=======
              <h5 className="dashboard-user-name">Hello, Sakib Nedariya</h5>
>>>>>>> 5e9d71c978b8d9b26fb0e8dcea8a09bc863a0a88
              <p>
                From your account dashboard, you can easily check & view your
                <span> Recent Orders</span>, manage your
                <span> Shipping and Billing Addresses</span>, and edit your
                <span> Password</span> and <span>Account Details.</span>
              </p>
            </div>

            <div className="account-info-and-billing-address">
              <div className="account-info-container">
                <h6>Account info</h6>
                <div className="user_details_content">
                  <div className="user-details" style={{ display: "flex" }}>
<<<<<<< HEAD
                    <img
                      src={
                        userDashData.profile
                          ? `/upload/${userDashData.profile}`
                          : profile
                      }
                      alt="profile"
                    />
=======
                    <img src={profile} alt="profile" />
>>>>>>> 5e9d71c978b8d9b26fb0e8dcea8a09bc863a0a88
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                      }}
                    >
<<<<<<< HEAD
                      <h5>
                        {userDashData.first_name} {userDashData.last_name}
                      </h5>
                      <p>
                        {userDashData.city}, {userDashData.state}
                      </p>
                    </div>
                  </div>

                  <div className="user_email_and_mobile_no">
                    <p>
                      Email: <span>{userDashData.email}</span>
                    </p>
                    <p>
                      Mobile No: <span>{userDashData.mobile_number}</span>
                    </p>
                  </div>

                  <button
                    className="user-profile-edit-btn"
                    onClick={handleEditAccount}
                  >
=======
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
                  <button className="user-profile-edit-btn" onClick={handleEditAccount}>
>>>>>>> 5e9d71c978b8d9b26fb0e8dcea8a09bc863a0a88
                    Edit Account
                  </button>
                </div>
              </div>

              <div className="account-info-container">
                <h6>Billing Address</h6>
                <div className="user_details_content">
                  <div className="user_billing_name">
                    <h5>Sakib Nedariya</h5>
                  </div>
                  <div className="user_email_and_mobile_no">
                    <p className="user-billing-address">
                      Mikro Grafio, 4th Gate, Calicut <br />
                      Pin: 678425
                    </p>
                    <p>
                      Mobile No:<span>+918569741212</span>
                    </p>
                    <p>
                      Email:<span>sakibnedariya@gmail.com</span>
                    </p>
                  </div>
<<<<<<< HEAD
                  <button
                    className="user-profile-edit-btn"
                    onClick={handleEditAddress}
                  >
=======
                  <button className="user-profile-edit-btn" onClick={handleEditAddress}>
>>>>>>> 5e9d71c978b8d9b26fb0e8dcea8a09bc863a0a88
                    Edit Address
                  </button>
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

export default Dashboard;
