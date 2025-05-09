// src/pages/LoginPage/LoginPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";  // Axios instance for making requests
import "./LoginPage.css";

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send POST request to the backend login endpoint
      const response = await api.post("http://localhost:8000/api/login", {
        email,
        password,  // Send the plain password to the backend for login
      });

      // If login is successful, the backend will return user data and a token
      const { user, token } = response.data;

      // Store the token (you can store it in localStorage or state)
      localStorage.setItem("authToken", token);

      // Pass the user data to the parent component (onLogin)
      onLogin(user);  

      // Redirect to the home page after successful login
      navigate("/");

    } catch (err) {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>
        <h2>Login to Smart Home</h2>

        {error && <div className="error">{error}</div>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

        <p className="register-link">
          Don't have an account?{" "}
          <span onClick={() => navigate("/register")}>Register here</span>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
