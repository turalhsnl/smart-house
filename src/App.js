import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { SmartHouseProvider } from "./context/SmartHouseContext";
import Header from "./componenets/header/Header";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import EventsLog from "./pages/eventslog/EventsLog";
import DefaultPage from "./pages/DefaultPage/DefaultPage";
import ControlePanel from "./componenets/controlepanel/Controle";
import api from "./api/api";
import HomePage from "./componenets/homepage/Homepage";
import RulesPage from "./pages/Rules/RulesPage";
import DevicePage from "./pages/Devices/Device";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [statusError, setStatusError] = useState("");
  const navigate = useNavigate();  

  const [lightStatus, setLightStatus] = useState(false);
  const [acStatus, setAcStatus] = useState(false);
  const [tvStatus, setTvStatus] = useState(false);
  const [showerStatus, setShowerStatus] = useState(false);
  const [thermometerStatus, setThermometerStatus] = useState(false);
  const [watchStatus, setWatchStatus] = useState(false);
  const [kitchenStatus, setKitchenStatus] = useState(false);
  const [fridgeStatus, setFridgeStatus] = useState(false);
  const [cameraStatus, setCameraStatus] = useState(false);
  const [vacuumStatus, setVacuumStatus] = useState(false);
  const [speakerStatus, setSpeakerStatus] = useState(false);


 useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    console.log("Stored User ID:", storedUserId);

    if (storedUserId) {
      api.get(`/api/users/${storedUserId}`)
        .then((res) => {
          // Assuming the response contains user data
          setUser(res.data); // Set the user data from API response
        })
        .catch((err) => {
          console.error("Error fetching status:", err);
          setStatusError("Backend not responding.");
        })
        .finally(() => setLoading(false));
    } else {
      setStatusError("No user ID found in localStorage.");
      setLoading(false); // End loading if no user ID is found
    }
}, []);


  useEffect(() => {}
  , [user]);


  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); 
    navigate("/control-panel");  
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");  
    navigate("/login");  
  };

  if (loading) return <p>Loading...</p>;
  if (statusError) return <p>{statusError}</p>;

  return (
    <SmartHouseProvider>
      <Header isAuthenticated={!!user} onLoginLogout={user ? handleLogout : handleLogin} />
      <Routes>
       
        <Route path="/" element={user ? <HomePage user={user}/> : <DefaultPage />} />
        
        
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/register" element={<RegisterPage />} />

        
       
        <Route
          path="/rules"
          element={user ? < RulesPage user={user} /> : <Navigate to="/rules" />}
        />
        
        <Route path="/devices" element={<DevicePage />} />
        <Route path="/events-log" element={<EventsLog />} />
      </Routes>
    </SmartHouseProvider>
  );
};

export default App;