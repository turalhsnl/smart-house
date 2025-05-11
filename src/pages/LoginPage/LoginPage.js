import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";  
import "./LoginPage.css";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please fill in both username and password.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/api/users/token", {
        email: username,  
        password: password,  
      });

      const { access_token, user_id } = response.data;

      
      localStorage.setItem('token', access_token);
      localStorage.setItem('userId', user_id);

      
      axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;

      console.log('Login successful');

    
      const { token, user } = response.data;

      localStorage.setItem("authToken", token);  

      
      onLogin(user);

      
      navigate("/");  
      window.location.reload()

    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
      setError("Invalid username or password. Please try again.");
    }
  };

  
  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>
        <h2>Login to Smart Home</h2>

        {error && <div className="error">{error}</div>}

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
