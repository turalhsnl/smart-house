import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Added useNavigate for routing
import "./Header.css";

const Header = ({ isAuthenticated, onLoginLogout }) => {
  const navigate = useNavigate(); // For navigating to login page
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <header className={`header ${isDarkMode ? "dark" : "light"}`}>
      <div className="logo">SmartHome</div>

      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="#devices">Devices</Link></li>
          <li><Link to="#settings">Settings</Link></li>
          <li><Link to="/events-log">Events Log</Link></li>
        </ul>
      </nav>

      <div className="actions">
        {/* Theme Toggle Button */}
        <button className="theme-toggle-btn" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

        {/* Login/Logout */}
        {isAuthenticated ? (
          <div className="user-profile">
            <img
              src="profile-icon.png"
              alt="User"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            />
            {isDropdownOpen && (
              <div className="dropdown">
                <button onClick={() => onLoginLogout(false)}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
