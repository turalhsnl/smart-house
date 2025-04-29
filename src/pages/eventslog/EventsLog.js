import React, { useContext } from "react";
import { SmartHouseContext } from "../../context/SmartHouseContext";
import "./EventsLog.css";

const EventsLog = () => {
  const { eventLogs } = useContext(SmartHouseContext);

  return (
    <div className="events-log-container">
      <h1>📋 Events Log</h1>
      <div className="events-log-list">
        {eventLogs.map((log, index) => (
          <div className="event-log-card" key={index}>
            {log}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsLog;
