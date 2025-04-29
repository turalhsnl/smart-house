import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { findUser } from "../../utils/userDb";
import "./LoginPage.css";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  
  
  const registered = location.state?.registered;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const user = findUser(username, password);
    if (user) {
      onLogin(true);  
      navigate("/");  
    } else {
      setError("Invalid username or password. Please register.");
    }
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>
        <h2>Smart Home Login</h2>

        {registered && (
          <div className="success-message">
            <p>Your account has been created successfully! Please login.</p>
          </div>
        )}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <div className="error">{error}</div>}

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
