import Footer from "../layout/Footer";
import UserSidebar from "./UserSidebar";
import Navbar from "../layout/Navbar";
import "../../../assets/css/client/userDashboard/accDetails.css";
import userProfile from "../../../assets/image/dash-profile.png";

import { useState, useEffect } from "react";
import { Country, State, City } from "country-state-city";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const AccountDetails = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      setStates(State.getStatesOfCountry(selectedCountry));
      setSelectedState("");
      setCities([]);
      setSelectedCity("");
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedState) {
      setCities(City.getCitiesOfState(selectedCountry, selectedState));
      setSelectedCity("");
    }
  }, [selectedState]);

  return (
    <>
      <Navbar />
      <div className="container-fluid userdashboard_main">
        <div className="container userdashboard_flex padding-main">
          <UserSidebar />
          <div className="userdashboard_main_content_div">
            <div className="userdashboard_main_border">
              <h6 style={{ borderBottom: "1px solid #e4e7e9" }}>
                Account Setting
              </h6>
              <div className="user_account_details_content">
                <div
                  className="user-profile-image-wrapper"
                  onClick={() => document.getElementById("imageUpload").click()}
                >
                  <img
                    src={userProfile}
                    alt="user-profile"
                    className="user-profile-image-wrapper-profile-img"
                  />
                  <div className="user-profile-image-wrapper-upload-overlay">
                    <div className="user-profile-image-wrapper-upload-content">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="#fff"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 20h14v-2H5v2zm7-14l5 5h-3v4h-4v-4H7l5-5z" />
                      </svg>
                      <span>Upload Image</span>
                    </div>
                  </div>
                  <input
                    type="file"
                    id="imageUpload"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        console.log("Selected:", file);
                      }
                    }}
                  />
                </div>

                <div className="user_profile_form">
                  <div className="user-profile-details-inner flex">
                    <div className="form-group">
                      <label>First Name</label>
                      <input
                        type="text"
                        name="firstname"
                        placeholder="Enter First Name"
                      />
                    </div>
                    <div className="form-group">
                      <label>Last Name</label>
                      <input
                        type="text"
                        name="lastname"
                        placeholder="Enter Last Name"
                      />
                    </div>
                  </div>
                  <div className="user-profile-details-inner flex">
                    <div className="form-group">
                      <label>Username</label>
                      <input
                        type="text"
                        name="username"
                        placeholder="Enter username"
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                      />
                    </div>
                  </div>
                  <div className="user-profile-details-inner flex">
                    <div className="form-group">
                      <label>Mobile Number</label>
                      <input
                        type="text"
                        name="mobile_number"
                        placeholder="Enter Mobile Number"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="country">Country</label>
                      <select
                        id="country"
                        value={selectedCountry}
                        onChange={(e) => setSelectedCountry(e.target.value)}
                      >
                        <option value="">Select Country</option>
                        {countries.map((country) => (
                          <option key={country.isoCode} value={country.isoCode}>
                            {country.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="user-profile-details-inner flex">
                    <div className="form-group">
                      <label htmlFor="state">State</label>
                      <select
                        id="state"
                        value={selectedState}
                        onChange={(e) => setSelectedState(e.target.value)}
                        disabled={!states.length}
                      >
                        <option value="">Select State</option>
                        {states.map((state) => (
                          <option key={state.isoCode} value={state.isoCode}>
                            {state.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="city">City</label>
                      <select
                        id="city"
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                        disabled={!cities.length}
                      >
                        <option value="">Select City</option>
                        {cities.map((city, index) => (
                          <option key={index} value={city.name}>
                            {city.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Pin code</label>
                      <input
                        type="text"
                        name="pincode"
                        placeholder="Enter Pincode"
                      />
                    </div>
                  </div>
                  <button className="primary-btn user-save-changes-btn">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>

            <div
              className="userdashboard_main_border"
              style={{ marginTop: "20px" }}
            >
              <h6 style={{ borderBottom: "1px solid #e4e7e9" }}>
                Change Password
              </h6>
              <div className="user_account_details_content">
                <div className="user_profile_form">
                  <div className="user-profile-details-inner flex">
                    <div className="form-group user-password">
                      <label>Current Password</label>
                      <div className="password-wrapper">
                        <input
                          type={showCurrentPassword ? "text" : "password"}
                          name="current-password"
                          placeholder="Enter current password"
                        />
                        <span
                          onClick={() =>
                            setShowCurrentPassword(!showCurrentPassword)
                          }
                        >
                          {showCurrentPassword ? (
                            <IoEyeOffOutline />
                          ) : (
                            <IoEyeOutline />
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="user-profile-details-inner flex">
                    <div className="form-group user-password">
                      <label>New Password</label>
                      <div className="password-wrapper">
                        <input
                          type={showNewPassword ? "text" : "password"}
                          name="new-password"
                          placeholder="Enter new password"
                        />
                        <span
                          onClick={() => setShowNewPassword(!showNewPassword)}
                        >
                          {showNewPassword ? (
                            <IoEyeOffOutline />
                          ) : (
                            <IoEyeOutline />
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="user-profile-details-inner flex">
                    <div className="form-group user-password">
                      <label>Confirm Password</label>
                      <div className="password-wrapper">
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          name="confirm-password"
                          placeholder="Enter confirm password"
                        />
                        <span
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                        >
                          {showConfirmPassword ? (
                            <IoEyeOffOutline />
                          ) : (
                            <IoEyeOutline />
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="primary-btn user-save-changes-btn">
                    Change Password
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

export default AccountDetails;
