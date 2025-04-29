import React,{ useContext } from "react";
import "./Controle.css";
import { SmartHouseContext } from "../../context/SmartHouseContext";



const ControlePanel = ({
  lightStatus,
  setLightStatus,
  acStatus,
  setAcStatus,
  tvStatus,
  setTvStatus,
  showerStatus,
  setShowerStatus,
  thermometerStatus,
  setThermometerStatus,
  watchStatus,
  setWatchStatus,
  kitchenStatus,
  setKitchenStatus,
  fridgeStatus,
  setFridgeStatus,
  cameraStatus,
  setCameraStatus,
  vacuumStatus,
  setVacuumStatus,
  speakerStatus,
  setSpeakerStatus,
}) => {
  const { addLog } = useContext(SmartHouseContext);

  const handleToggle = (name, value, setter) => {
    setter(!value);
    addLog(`${name} turned ${!value ? "ON" : "OFF"}`);
  };

  return (
    <div className="controls-panel">
      <h3>Device Controls</h3>
  
      <label>
        <input
          type="checkbox"
          checked={lightStatus}
          onChange={() => handleToggle("Living Room Light", lightStatus, setLightStatus)}
        />
        Living Room Light
      </label>
  
      <label>
        <input
          type="checkbox"
          checked={acStatus}
          onChange={() => handleToggle("AC", acStatus, setAcStatus)}
        />
        AC
      </label>
  
      <label>
        <input
          type="checkbox"
          checked={tvStatus}
          onChange={() => handleToggle("TV", tvStatus, setTvStatus)}
        />
        TV
      </label>
  
      <label>
        <input
          type="checkbox"
          checked={showerStatus}
          onChange={() => handleToggle("Bathroom Shower", showerStatus, setShowerStatus)}
        />
        Bathroom Shower
      </label>
  
      <label>
        <input
          type="checkbox"
          checked={thermometerStatus}
          onChange={() => handleToggle("Thermometer", thermometerStatus, setThermometerStatus)}
        />
        Thermometer
      </label>
  
      <label>
        <input
          type="checkbox"
          checked={watchStatus}
          onChange={() => handleToggle("Smart Watch", watchStatus, setWatchStatus)}
        />
        Smart Watch
      </label>
  
      <label>
        <input
          type="checkbox"
          checked={kitchenStatus}
          onChange={() => handleToggle("Kitchen", kitchenStatus, setKitchenStatus)}
        />
        Kitchen
      </label>
  
      <label>
        <input
          type="checkbox"
          checked={fridgeStatus}
          onChange={() => handleToggle("Smart Fridge", fridgeStatus, setFridgeStatus)}
        />
        Smart Fridge
      </label>
  
      <label>
        <input
          type="checkbox"
          checked={cameraStatus}
          onChange={() => handleToggle("Security Camera", cameraStatus, setCameraStatus)}
        />
        Security Camera
      </label>
  
      <label>
        <input
          type="checkbox"
          checked={vacuumStatus}
          onChange={() => handleToggle("Smart Vacuum", vacuumStatus, setVacuumStatus)}
        />
        Smart Vacuum
      </label>
  
      <label>
        <input
          type="checkbox"
          checked={speakerStatus}
          onChange={() => handleToggle("Smart Speaker", speakerStatus, setSpeakerStatus)}
        />
        Smart Speaker
      </label>
    </div>
  );
  
};

export default ControlePanel;
