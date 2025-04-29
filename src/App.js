import { SmartHouseProvider } from "./context/SmartHouseContext"; 
import React, { useState,useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componenets/header/Header";
import HomePage from "./componenets/homepage/Homepage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import EventsLog from "./pages/eventslog/EventsLog"; 
import DefaultPage from "./pages/DefaultPage/DefaultPage";  // Import the DefaultPage




const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Simulate user login state based on localStorage or some logic
  useEffect(() => {
    const userLoggedIn = localStorage.getItem("userLoggedIn");
    if (userLoggedIn) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLoginLogout = (status) => {
    setIsAuthenticated(status);
    localStorage.setItem("userLoggedIn", status ? "true" : "false");
  };

  return (
    <SmartHouseProvider>
      <Router>
        <Header isAuthenticated={isAuthenticated} onLoginLogout={handleLoginLogout} />
        <Routes>
          {/* Redirect to DefaultPage if no user is authenticated */}
          <Route path="/" element={isAuthenticated ? <HomePage /> : <DefaultPage />} />
          <Route path="/login" element={<LoginPage onLogin={handleLoginLogout} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/events-log" element={<EventsLog />} />
        </Routes>
      </Router>
    </SmartHouseProvider>
  );
};

export default App;
