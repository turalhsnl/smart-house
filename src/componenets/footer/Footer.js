import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // Simulate a weather API fetch (using a dummy object here)
    const fetchWeather = () => {
      setWeather({ temperature: 21, condition: 'Clear Sky' });
    };

    fetchWeather();
    const interval = setInterval(fetchWeather, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer">
      <div className="quick-links">
        <a href="#about">About</a>
        <a href="#support">Support</a>
        <a href="#privacy">Privacy</a>
      </div>
      <div className="system-status">
        <p>Status: <span className="active">Active</span></p>
        {weather && (
          <p>Weather: {weather.condition}, {weather.temperature}°C</p>
        )}
      </div>
      <div className="social-media">
        <a href="#linkedin">LinkedIn</a>
        <a href="#twitter">Twitter</a>
      </div>
      <p>© 2025 SmartHome Inc.</p>
    </footer>
  );
};

export default Footer;
