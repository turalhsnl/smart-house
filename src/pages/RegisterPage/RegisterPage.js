// src/pages/RegisterPage/RegisterPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";  // Axios instance for making requests
import "./RegisterPage.css"; // Import your CSS file for styling

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

   
    if (!email || !fullname || !password || !confirmPassword) {
      return setError("All fields are required.");
    }

    if (password !== confirmPassword) {
      return setError("Passwords do not match.");
    }

    // Log to check the fullname value before sending
    console.log("Full Name:", fullname);

    try {
      // Make sure the correct data is sent, including a default 'roles' field as a list
      await api.post("http://localhost:8000/api/users/", {
        email,
        fullname,
        password,
        roles: ["user"], 
      });

      // Redirect to login page after successful registration
      navigate("/login", { state: { registered: true } });
    } catch (err) {
      const msg = err.response?.data?.detail || "Registration failed.";
      setError(msg);
    }
  };

  return (
    <div className="register-container">
      <form className="register-box" onSubmit={handleRegister}>
        <h2>Create Account</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Full Name"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {error && <div className="error">{error}</div>}

        <button type="submit">Register</button>

        <p className="login-link">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login here</span>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
