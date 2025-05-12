import React, { useEffect, useState } from "react";
import axios from "axios"; // For making API calls
import "./Device.css"; // Importing CSS for styling

// List of valid devices that can be created
const validDevices = [
  "Living Room Light", "AC", "TV", "Bathroom Shower", 
  "Thermometer", "Smart Watch", "Kitchen", "Smart Fridge", 
  "Security Camera", "Smart Vacuum"
];

const DevicePage = () => {
  const [devices, setDevices] = useState([]);
  const [deviceName, setDeviceName] = useState("");
  const [deviceValid, setDeviceValid] = useState(true); // State to track if the device is valid

  // Fetch devices based on user_id when the component mounts
  useEffect(() => {
    fetchDevices();
  }, []);

  // Function to fetch devices for the logged-in user based on user_id
  const fetchDevices = async () => {
    const userId = localStorage.getItem('userId');
    console.log("User ID from localStorage:", userId);

    if (!userId) {
      console.error("User ID is not available. Please log in.");
      return;
    }

    try {
      const response = await axios.get("http://localhost:8000/api/devices/");
      console.log("Fetched devices for user:", response.data); 
      setDevices(response.data);  
    } catch (error) {
      console.error("Error fetching devices:", error);
    }
  };

  const createDevice = async () => {
    if (!deviceName.trim()) {
      alert("Device name cannot be empty!");
      return;
    }

    if (!validDevices.includes(deviceName)) {
      alert("This device is not on the allowed list!");
      return;
    }

    const userId = localStorage.getItem('userId');
    console.log("User ID from localStorage:", userId);  // Log user_id

    const payload = {
      name: deviceName,
      type: "default_type", // You can add this if necessary
      location: "default_location", // You can add this if necessary
      user_id: userId,  // Include user_id from localStorage
      is_active: true,
      registered_at: new Date().toISOString(),  // Current timestamp
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/devices/",
        payload,
        {
          headers: {
            "Content-Type": "application/json", // Ensure Content-Type is application/json
          },
        }
      );
      setDevices([...devices, response.data]); // Add the newly created device to the state
      setDeviceName(""); // Reset the input field
      console.log("Device created:", response.data);
    } catch (error) {
      console.error("Error creating device:", error.response ? error.response.data : error.message);
      alert("An error occurred while creating the device.");
    }
  };

  // Handle when a user selects a valid device from the list
  const handleDeviceSelection = (device) => {
    setDeviceName(device);
    setDeviceValid(true); // Set as valid once a valid device is selected
  };

  return (
    <div className="form-container">
      <h1>Devices</h1>

      {/* Input for creating a new device */}
      <div>
        <input
          type="text"
          value={deviceName}
          onChange={(e) => {
            setDeviceName(e.target.value);
            setDeviceValid(validDevices.includes(e.target.value)); // Check if device name is valid
          }}
          placeholder="Enter device name"
        />
        <button onClick={createDevice} disabled={!deviceValid}>Create Device</button>
      </div>

      {/* Display the list of valid device names horizontally */}
      <div className="device-list">
        {deviceName && !validDevices.includes(deviceName) && (
          <p>Please choose a device from the list below:</p>
        )}
        <div className="device-options">
          {validDevices.map((device) => (
            <button key={device} onClick={() => handleDeviceSelection(device)}>{device}</button>
          ))}
        </div>
      </div>

      {/* Display the devices */}
      <div className="device-container">
        {devices.length > 0 ? (
          devices.map((device) => (
            <div key={device.id} className="device">
              <p>{device.name}</p>
            </div>
          ))
        ) : (
          <p>No devices available</p>
        )}
      </div>
    </div>
  );
};

export default DevicePage;
