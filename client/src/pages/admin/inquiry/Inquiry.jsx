<<<<<<< HEAD
=======
import React from "react";
>>>>>>> 5e9d71c978b8d9b26fb0e8dcea8a09bc863a0a88
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import Breadcrumb from "../layout/Breadcrumb";
import { IoIosEye } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";

const Inquiry = () => {

  const navigate = useNavigate();
  const handleNavigateView = () => {
    navigate(`/admin/inquiry/view-inquiry`);
  };

=======

const Inquiry = () => {
>>>>>>> 5e9d71c978b8d9b26fb0e8dcea8a09bc863a0a88
  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="admin-panel-header-div full-height">
        <Breadcrumb title="Inquiry" breadcrumbText="Inquiry List" />
        <div className="dashboard-table-container">
          <table>
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    style={{ width: "16px", height: "16px" }}
                  />
                </th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile Number</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    style={{ width: "16px", height: "16px" }}
                  />
                </td>
                <td style={{ color: "black" }}>Sakib Nedariya</td>
                <td style={{ textTransform: "lowercase" }}>
                  sakibnedariya@gmail.com
                </td>
                <td>9875463210</td>
                <td className="inquiry-message">
                  This is the inquiry for damage products delivered from xcart.
                </td>
                <td className="actions">
<<<<<<< HEAD
                  <IoIosEye title="View" onClick={handleNavigateView} />
=======
                  <IoIosEye title="View" />
                  <MdDeleteForever title="Delete" />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    style={{ width: "16px", height: "16px" }}
                  />
                </td>
                <td style={{ color: "black" }}>Sakib Nedariya</td>
                <td style={{ textTransform: "lowercase" }}>
                  sakibnedariya@gmail.com
                </td>
                <td>9875463210</td>
                <td className="inquiry-message">
                  This is the inquiry for damage products delivered from xcart.
                </td>
                <td className="actions">
                  <IoIosEye title="View" />
                  <MdDeleteForever title="Delete" />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    style={{ width: "16px", height: "16px" }}
                  />
                </td>
                <td style={{ color: "black" }}>Sakib Nedariya</td>
                <td style={{ textTransform: "lowercase" }}>
                  sakibnedariya@gmail.com
                </td>
                <td>9875463210</td>
                <td className="inquiry-message">
                  This is the inquiry for damage products delivered from xcart.
                </td>
                <td className="actions">
                  <IoIosEye title="View" />
                  <MdDeleteForever title="Delete" />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    style={{ width: "16px", height: "16px" }}
                  />
                </td>
                <td style={{ color: "black" }}>Sakib Nedariya</td>
                <td style={{ textTransform: "lowercase" }}>
                  sakibnedariya@gmail.com
                </td>
                <td>9875463210</td>
                <td className="inquiry-message">
                  This is the inquiry for damage products delivered from xcart.
                </td>
                <td className="actions">
                  <IoIosEye title="View" />
                  <MdDeleteForever title="Delete" />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    style={{ width: "16px", height: "16px" }}
                  />
                </td>
                <td style={{ color: "black" }}>Sakib Nedariya</td>
                <td style={{ textTransform: "lowercase" }}>
                  sakibnedariya@gmail.com
                </td>
                <td>9875463210</td>
                <td className="inquiry-message">
                  This is the inquiry for damage products delivered from xcart.
                </td>
                <td className="actions">
                  <IoIosEye title="View" />
                  <MdDeleteForever title="Delete" />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    style={{ width: "16px", height: "16px" }}
                  />
                </td>
                <td style={{ color: "black" }}>Sakib Nedariya</td>
                <td style={{ textTransform: "lowercase" }}>
                  sakibnedariya@gmail.com
                </td>
                <td>9875463210</td>
                <td className="inquiry-message">
                  This is the inquiry for damage products delivered from xcart.
                </td>
                <td className="actions">
                  <IoIosEye title="View" />
                  <MdDeleteForever title="Delete" />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    style={{ width: "16px", height: "16px" }}
                  />
                </td>
                <td style={{ color: "black" }}>Sakib Nedariya</td>
                <td style={{ textTransform: "lowercase" }}>
                  sakibnedariya@gmail.com
                </td>
                <td>9875463210</td>
                <td className="inquiry-message">
                  This is the inquiry for damage products delivered from xcart.
                </td>
                <td className="actions">
                  <IoIosEye title="View" />
                  <MdDeleteForever title="Delete" />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    style={{ width: "16px", height: "16px" }}
                  />
                </td>
                <td style={{ color: "black" }}>Sakib Nedariya</td>
                <td style={{ textTransform: "lowercase" }}>
                  sakibnedariya@gmail.com
                </td>
                <td>9875463210</td>
                <td className="inquiry-message">
                  This is the inquiry for damage products delivered from xcart.
                </td>
                <td className="actions">
                  <IoIosEye title="View" />
                  <MdDeleteForever title="Delete" />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    style={{ width: "16px", height: "16px" }}
                  />
                </td>
                <td style={{ color: "black" }}>Sakib Nedariya</td>
                <td style={{ textTransform: "lowercase" }}>
                  sakibnedariya@gmail.com
                </td>
                <td>9875463210</td>
                <td className="inquiry-message">
                  This is the inquiry for damage products delivered from xcart.
                </td>
                <td className="actions">
                  <IoIosEye title="View" />
                  <MdDeleteForever title="Delete" />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    style={{ width: "16px", height: "16px" }}
                  />
                </td>
                <td style={{ color: "black" }}>Sakib Nedariya</td>
                <td style={{ textTransform: "lowercase" }}>
                  sakibnedariya@gmail.com
                </td>
                <td>9875463210</td>
                <td className="inquiry-message">
                  This is the inquiry for damage products delivered from xcart.
                </td>
                <td className="actions">
                  <IoIosEye title="View" />
                  <MdDeleteForever title="Delete" />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    style={{ width: "16px", height: "16px" }}
                  />
                </td>
                <td style={{ color: "black" }}>Sakib Nedariya</td>
                <td style={{ textTransform: "lowercase" }}>
                  sakibnedariya@gmail.com
                </td>
                <td>9875463210</td>
                <td className="inquiry-message">
                  This is the inquiry for damage products delivered from xcart.
                </td>
                <td className="actions">
                  <IoIosEye title="View" />
                  <MdDeleteForever title="Delete" />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    style={{ width: "16px", height: "16px" }}
                  />
                </td>
                <td style={{ color: "black" }}>Sakib Nedariya</td>
                <td style={{ textTransform: "lowercase" }}>
                  sakibnedariya@gmail.com
                </td>
                <td>9875463210</td>
                <td className="inquiry-message">
                  This is the inquiry for damage products delivered from xcart.
                </td>
                <td className="actions">
                  <IoIosEye title="View" />
                  <MdDeleteForever title="Delete" />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    style={{ width: "16px", height: "16px" }}
                  />
                </td>
                <td style={{ color: "black" }}>Sakib Nedariya</td>
                <td style={{ textTransform: "lowercase" }}>
                  sakibnedariya@gmail.com
                </td>
                <td>9875463210</td>
                <td className="inquiry-message">
                  This is the inquiry for damage products delivered from xcart.
                </td>
                <td className="actions">
                  <IoIosEye title="View" />
                  <MdDeleteForever title="Delete" />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    style={{ width: "16px", height: "16px" }}
                  />
                </td>
                <td style={{ color: "black" }}>Sakib Nedariya</td>
                <td style={{ textTransform: "lowercase" }}>
                  sakibnedariya@gmail.com
                </td>
                <td>9875463210</td>
                <td className="inquiry-message">
                  This is the inquiry for damage products delivered from xcart.
                </td>
                <td className="actions">
                  <IoIosEye title="View" />
                  <MdDeleteForever title="Delete" />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    style={{ width: "16px", height: "16px" }}
                  />
                </td>
                <td style={{ color: "black" }}>Sakib Nedariya</td>
                <td style={{ textTransform: "lowercase" }}>
                  sakibnedariya@gmail.com
                </td>
                <td>9875463210</td>
                <td className="inquiry-message">
                  This is the inquiry for damage products delivered from xcart.
                </td>
                <td className="actions">
                  <IoIosEye title="View" />
                  <MdDeleteForever title="Delete" />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    style={{ width: "16px", height: "16px" }}
                  />
                </td>
                <td style={{ color: "black" }}>Sakib Nedariya</td>
                <td style={{ textTransform: "lowercase" }}>
                  sakibnedariya@gmail.com
                </td>
                <td>9875463210</td>
                <td className="inquiry-message">
                  This is the inquiry for damage products delivered from xcart.
                </td>
                <td className="actions">
                  <IoIosEye title="View" />
>>>>>>> 5e9d71c978b8d9b26fb0e8dcea8a09bc863a0a88
                  <MdDeleteForever title="Delete" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};

export default Inquiry;
