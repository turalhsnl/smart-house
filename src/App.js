import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SmartHouseProvider } from "./context/SmartHouseContext";
import Header from "./componenets/header/Header";
import HomePage from "./componenets/homepage/Homepage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import EventsLog from "./pages/eventslog/EventsLog";
import DefaultPage from "./pages/DefaultPage/DefaultPage";
import api from "./api/api";

const App = () => {
  console.log("REACT_APP_API_URL:", process.env.REACT_APP_API_URL);
  const [user, setUser] = useState(null); // 🧠 Full user object
  const [loading, setLoading] = useState(true);
  const [statusError, setStatusError] = useState("");

  // ✅ Load user from localStorage on first render
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        localStorage.removeItem("user");
      }
    }
  }, []);

  // 🌐 Fetch backend status on first mount
  useEffect(() => {
    api.get("/api/users/681bd93356a60e7d7ffdebf8")
      .then((res) => console.log("Backend status:", res.data))
      .catch((err) => {
        console.error("Error fetching status:", err);
        setStatusError("Backend not responding.");
      })
      .finally(() => setLoading(false));
  }, []);

  // 🧠 Login Handler - receives user object
  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  if (loading) return <p>Loading...</p>;
  if (statusError) return <p>{statusError}</p>;

  return (
    <SmartHouseProvider>
      <Router>
        <Header isAuthenticated={!!user} onLoginLogout={user ? handleLogout : handleLogin} />
        <Routes>
          <Route path="/" element={user ? <HomePage user={user} /> : <DefaultPage />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/events-log" element={<EventsLog />} />
        </Routes>
      </Router>
    </SmartHouseProvider>
  );
};

export default App;
