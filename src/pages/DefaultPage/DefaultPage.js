import React from "react";
import { useNavigate } from "react-router-dom";
import "./DefaultPage.css";

const DefaultPage = () => {
  const navigate = useNavigate();

  return (
    <div className="default-container">
      <div className="overlay">
        <h1>Welcome to Smart Home</h1>
        <p>Please log in or register to get started.</p>

        <div className="action-buttons">
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login
          </button>
          <button className="register-btn" onClick={() => navigate("/register")}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default DefaultPage;
