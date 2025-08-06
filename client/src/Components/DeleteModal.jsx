import React, { useState, useEffect } from "react";
import { CgTrash } from "react-icons/cg";
import { HiXMark } from "react-icons/hi2";

const DeleteModal = ({ title, onCancel, onDelete }) => {
  const [captcha, setCaptcha] = useState("");
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState("");


  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
<<<<<<< HEAD
    const randomCaptcha = Math.floor(1000 + Math.random() * 9000).toString(); 
=======
    const randomCaptcha = Math.floor(10000 + Math.random() * 90000).toString(); // Generates a 5-digit random number
>>>>>>> 5e9d71c978b8d9b26fb0e8dcea8a09bc863a0a88
    setCaptcha(randomCaptcha);
    setUserInput("");
    setError(""); 
  };

  const handleCaptchaChange = (e) => {
    setUserInput(e.target.value);
    setError("");
  };

  const handleDelete = () => {
    if (userInput === captcha) {
      onDelete(); 
    } else {
      setError("Incorrect CAPTCHA value. Please try again.");
    }
  };

  return (
    <div className="delete-modal-container">
      <div className="modal">
        <h6>Delete {title}</h6>
        <div>
          <label htmlFor="captcha">
<<<<<<< HEAD
            If you want to delete, enter <strong>"{captcha}"</strong>
=======
            If you want to delete, enter <strong>{captcha}</strong>
>>>>>>> 5e9d71c978b8d9b26fb0e8dcea8a09bc863a0a88
          </label>
          <input
            type="text"
            id="captcha"
            name="captcha"
            placeholder="Enter captcha code..."
            value={userInput}
            onChange={handleCaptchaChange}
          />
          {error && <span className="error-message">{error}</span>}
        </div>
        <div className="modal-container-buttons">
          <button type="button" className="cancel-btn" onClick={onCancel}>
            <HiXMark /> Cancel
          </button>
          <button type="button" className="delete-btn" onClick={handleDelete}>
            <CgTrash /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
