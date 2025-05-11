import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./RulesPage.css"; // Import CSS for styling

const RulesPage = () => {
  // State for added devices
  const [devices, setDevices] = useState([]); // Array of devices added
  const [showDropdown, setShowDropdown] = useState(false); // Dropdown menu visibility

  const navigate = useNavigate();

  // Available devices list
  const availableDevices = [
    "AC",
    "Thermometer",
    "Camera",
    "Smart Light",
    "Smart Fan",
  ];

  // Load saved device settings from localStorage on first render
  useEffect(() => {
    const savedDevices = localStorage.getItem("devices");
    if (savedDevices) {
      setDevices(JSON.parse(savedDevices)); // Load devices from localStorage
    }
  }, []);

  // Handle device selection
  const handleDeviceSelection = (device) => {
    const newDevice = {
      device,
      settings: {
        acTemperature: 22, // Default temperature for AC
        motionDetection: false, // Default motion detection for Camera
        brightness: 50, // Default brightness for Smart Light
        fanSpeed: 3, // Default fan speed for Smart Fan
      },
    };
    setDevices([...devices, newDevice]); // Add selected device to devices array
    setShowDropdown(false); // Close dropdown after selecting device
  };

  // Handle temperature change
  const handleTemperatureChange = (e, deviceIndex) => {
    const updatedDevices = [...devices];
    updatedDevices[deviceIndex].settings.acTemperature = e.target.value;
    setDevices(updatedDevices); // Update device settings
  };

  // Handle motion detection change for camera
  const handleMotionDetectionChange = (e, deviceIndex) => {
    const updatedDevices = [...devices];
    updatedDevices[deviceIndex].settings.motionDetection = e.target.checked;
    setDevices(updatedDevices); // Update device settings
  };

  // Handle brightness change for smart light
  const handleBrightnessChange = (e, deviceIndex) => {
    const updatedDevices = [...devices];
    updatedDevices[deviceIndex].settings.brightness = e.target.value;
    setDevices(updatedDevices); // Update device settings
  };

  // Handle fan speed change for smart fan
  const handleFanSpeedChange = (e, deviceIndex) => {
    const updatedDevices = [...devices];
    updatedDevices[deviceIndex].settings.fanSpeed = e.target.value;
    setDevices(updatedDevices); // Update device settings
  };

  // Handle delete button click
  const handleDelete = (deviceIndex) => {
    const updatedDevices = devices.filter((_, index) => index !== deviceIndex); // Remove the device at the selected index
    setDevices(updatedDevices); // Update the devices array
  };

  // Save settings
  const handleSave = () => {
    localStorage.setItem("devices", JSON.stringify(devices)); // Save devices to localStorage
    console.log("Settings saved:", devices);
    alert("Settings saved successfully!");
    navigate("/"); // Redirect after saving
  };

  return (
    <div className="rules-container">
      <h2>Smart Device Rules</h2>

      {/* Device selection and + button */}
      <div className="add-device">
        <button className="add-device-btn" onClick={() => setShowDropdown(!showDropdown)}>
          +
        </button>

        {showDropdown && (
          <div className="dropdown-menu">
            {availableDevices.map((device, index) => (
              <div key={index} onClick={() => handleDeviceSelection(device)} className="dropdown-item">
                {device}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Display added devices and their rules */}
      {devices.length > 0 && (
        <div className="device-rules">
          <h3>Created Device Rules</h3>
          {devices.map((device, index) => (
            <div key={index} className="device-rule">
              <h4>{device.device} Settings</h4>

              {/* AC Settings */}
              {device.device === "AC" && (
                <div className="device-setting">
                  <label>
                    Temperature (°C):
                    <input
                      type="number"
                      value={device.settings.acTemperature}
                      onChange={(e) => handleTemperatureChange(e, index)}
                      min="16"
                      max="30"
                    />
                  </label>
                </div>
              )}

              {/* Thermometer Settings */}
              {device.device === "Thermometer" && (
                <div className="device-setting">
                  <label>
                    Temperature Range:
                    <input
                      type="number"
                      value={device.settings.acTemperature}
                      onChange={(e) => handleTemperatureChange(e, index)}
                      min="0"
                      max="100"
                    />
                  </label>
                </div>
              )}

              {/* Camera Settings */}
              {device.device === "Camera" && (
                <div className="device-setting">
                  <label>
                    Enable Motion Detection:
                    <input
                      type="checkbox"
                      checked={device.settings.motionDetection}
                      onChange={(e) => handleMotionDetectionChange(e, index)}
                    />
                  </label>
                </div>
              )}

              {/* Smart Light Settings */}
              {device.device === "Smart Light" && (
                <div className="device-setting">
                  <label>
                    Brightness (%):
                    <input
                      type="number"
                      value={device.settings.brightness}
                      onChange={(e) => handleBrightnessChange(e, index)}
                      min="0"
                      max="100"
                    />
                  </label>
                </div>
              )}

              {/* Smart Fan Settings */}
              {device.device === "Smart Fan" && (
                <div className="device-setting">
                  <label>
                    Fan Speed (1-5):
                    <input
                      type="number"
                      value={device.settings.fanSpeed}
                      onChange={(e) => handleFanSpeedChange(e, index)}
                      min="1"
                      max="5"
                    />
                  </label>
                </div>
              )}

              {/* Delete Button */}
              <button className="delete-btn" onClick={() => handleDelete(index)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      <button className="save-btn" onClick={handleSave}>
        Save Settings
      </button>
    </div>
  );
};

export default RulesPage;
