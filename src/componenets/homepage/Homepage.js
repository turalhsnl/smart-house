import React, { useState } from "react";
import "./Homepage.css";
import ControlePanel from "../controlepanel/Controle";

const HomePage = () => {
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

  return (
    <div className="homepage">
      <h1>Smart Home Visualization</h1>
      <div className="main-content">
        <ControlePanel
          lightStatus={lightStatus} setLightStatus={setLightStatus}
          acStatus={acStatus} setAcStatus={setAcStatus}
          tvStatus={tvStatus} setTvStatus={setTvStatus}
          showerStatus={showerStatus} setShowerStatus={setShowerStatus}
          thermometerStatus={thermometerStatus} setThermometerStatus={setThermometerStatus}
          watchStatus={watchStatus} setWatchStatus={setWatchStatus}
          kitchenStatus={kitchenStatus} setKitchenStatus={setKitchenStatus}
          fridgeStatus={fridgeStatus} setFridgeStatus={setFridgeStatus}
          cameraStatus={cameraStatus} setCameraStatus={setCameraStatus}
          vacuumStatus={vacuumStatus} setVacuumStatus={setVacuumStatus}
          speakerStatus={speakerStatus} setSpeakerStatus={setSpeakerStatus}
        />

        <svg width="900" height="600" className="house-layout">
          {/* Living Room */}
          <g transform="translate(50, 50)">
            <rect width="250" height="200" rx="20" fill={lightStatus ? "#ffe066" : "#ccc"} />
            <circle cx="125" cy="110" r="30" fill="#f7b267" />
            <text x="125" y="30" textAnchor="middle" className="svg-label">Living Room</text>
          </g>

          {/* AC */}
          <g transform="translate(320, 50)">
            <rect width="160" height="50" rx="10" fill={acStatus ? "#add8e6" : "#aaa"} />
            <text x="80" y="30" textAnchor="middle" className="svg-label">AC</text>
          </g>

          {/* TV */}
          <g transform="translate(320, 120)">
            <rect width="140" height="70" rx="10" fill={tvStatus ? "#ff6b6b" : "#aaa"} />
            <text x="70" y="45" textAnchor="middle" className="svg-label">TV</text>
          </g>

          {/* Bathroom */}
          <g transform="translate(50, 280)">
            <rect width="250" height="130" rx="20" fill={showerStatus ? "#87ceeb" : "#ccc"} />
            <circle cx="125" cy="90" r="25" fill="#d0f0f0" />
            <text x="125" y="25" textAnchor="middle" className="svg-label">Bathroom</text>
          </g>

          {/* Thermometer */}
          <g transform="translate(520, 70)">
            <circle cx="30" cy="30" r="30" fill={thermometerStatus ? "#ff5733" : "#aaa"} />
            <text x="30" y="35" textAnchor="middle" className="svg-label" fill="#fff">Thermo</text>
          </g>

          {/* Smart Watch */}
          <g transform="translate(520, 190)">
            <circle cx="30" cy="30" r="30" fill={watchStatus ? "#9b59b6" : "#aaa"} />
            <text x="30" y="35" textAnchor="middle" className="svg-label" fill="#fff">Watch</text>
          </g>

          {/* Kitchen */}
          <g transform="translate(550, 320)">
            <rect width="200" height="110" rx="20" fill={kitchenStatus ? "#fcbf49" : "#ccc"} />
            <ellipse cx="100" cy="80" rx="35" ry="20" fill="#ffe5b4" />
            <text x="100" y="25" textAnchor="middle" className="svg-label">Kitchen</text>
          </g>

          {/* Smart Fridge */}
          <g transform="translate(770, 500)">
            <rect width="90" height="70" rx="10" fill={fridgeStatus ? "#94d2bd" : "#bbb"} />
            <text x="45" y="45" textAnchor="middle" className="svg-label">Fridge</text>
          </g>

          {/* Security Camera */}
          <g transform="translate(850, 30)">
            <circle cx="20" cy="20" r="20" fill={cameraStatus ? "#ffafcc" : "#bbb"} />
            <text x="20" y="25" textAnchor="middle" fontSize="12" className="svg-label">Cam</text>
          </g>

          {/* Smart Vacuum */}
          <g transform="translate(55, 500)">
            <ellipse cx="25" cy="20" rx="25" ry="18" fill={vacuumStatus ? "#a0c4ff" : "#bbb"} />
            <text x="25" y="25" textAnchor="middle" fontSize="12" className="svg-label">Vacuum</text>
          </g>

          {/* Smart Speaker */}
          <g transform="translate(20, 10)">
            <rect width="60" height="30" rx="10" fill={speakerStatus ? "#caffbf" : "#bbb"} />
            <text x="30" y="20" textAnchor="middle" className="svg-label">Speaker</text>
          </g>

          {/* Doors */}
          <rect x="160" y="250" width="30" height="30" fill="#444" rx="6" />
          <rect x="300" y="100" width="20" height="40" fill="#444" rx="4" />
          <rect x="480" y="360" width="20" height="40" fill="#444" rx="4" />
        </svg>
      </div>
    </div>
  );
};

export default HomePage;
