import React, { createContext, useState } from "react";

export const SmartHouseContext = createContext();

export const SmartHouseProvider = ({ children }) => {
  const [eventLogs, setEventLogs] = useState([]);

  const addLog = (message) => {
    const timestamp = new Date().toLocaleTimeString();
    setEventLogs((prev) => [...prev, `${timestamp} - ${message}`]);
  };

  return (
    <SmartHouseContext.Provider value={{ eventLogs, addLog }}>
      {children}
    </SmartHouseContext.Provider>
  );
};
