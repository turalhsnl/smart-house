import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveUser, userExists } from "../../utils/userDb";
import "./RegisterPage.css"; 

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (!username || !password) {
      return setError("All fields are required.");
    }

    if (password !== confirm) {
      return setError("Passwords do not match.");
    }

    if (userExists(username)) {
      return setError("Username already exists.");
    }

    saveUser({ username, password });
    navigate("/login", { state: { registered: true } });
  };

  return (
    <div className="register-container">
      <form className="register-box" onSubmit={handleRegister}>
        <h2>Create Account</h2>

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

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />

        {error && <div className="error">{error}</div>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
