import React from "react";
import Navbar from "../layout/Navbar";
import UserSidebar from "./UserSidebar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid userdashboard_main">
        <div className="container userdashboard_flex padding-main">
          <UserSidebar />
          <div className="userdashboard_main_content_div"></div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
