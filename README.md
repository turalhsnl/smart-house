# Smart House Frontend 🌐💻

## Overview ✨💡🖥️
The Smart House Frontend is a responsive web interface developed using React and JavaScript. It provides users with an intuitive platform to interact with and manage their smart home system. The frontend communicates with the backend via API requests, ensuring real-time synchronization of device states, sensor data, and automation rules.

## Core Features 🚀🌟

### User Interface (UI)
- A dynamic dashboard for users to control and monitor devices.
- Real-time updates on device states (on/off) and sensor data.
- Interactive pages to manage devices, events, and automation rules.

### Device Management
- Add, update, and remove devices from the smart home system.
- Toggle device states (on/off) and view real-time device status.

### Sensor Monitoring
- Real-time display of sensor readings for various devices.
- Filter sensors based on the device and view their current data.

### Rule Configuration
- Manage automation rules to control device behavior based on triggers and conditions.
- View and delete existing rules.

### Event Logging
- Track and log events triggered by devices and sensors in real-time.

## Tech Stack 🛠️💻
- **JavaScript** for dynamic, event-driven functionality.
- **React** for building the interactive user interface and managing component state.
- **Axios** for making API requests to the backend to fetch and manage data.
- **.env** for environment-specific configurations (e.g., backend API URLs).
- **CSS** for styling and ensuring a responsive layout across devices.

## Project Structure 📂

```bash
smarthouse-frontend/
├── public/                   # Static files (favicon, index.html, images)
│   ├── favicon.ico           # Favicon for the app
│   ├── index.html            # The main HTML template
│   ├── logo192.png           # Logo for 192px resolution
│   ├── logo512.png           # Logo for 512px resolution
│   ├── manifest.json         # Web app manifest for adding app to home screen
│   └── robots.txt            # Instructions for web crawlers
├── src/
│   ├── api/                  # API configuration and requests
│   ├── components/           # Reusable components (buttons, device lists)
│   │   ├── controlpanel/     # Control panel component (Control.js)
│   │   ├── footer/           # Footer component (Footer.js)
│   │   ├── header/           # Header component (Header.js)
│   │   └── homepage/         # Homepage component (Homepage.js)
│   ├── context/              # React context for managing global state
│   ├── pages/                # Pages for each section of the app
│   │   ├── DefaultPage/      # Default landing page (DefaultPage.js)
│   │   ├── Devices/          # Device management page (Device.js)
│   │   ├── EventsLog/        # Event logging page (EventsLog.js)
│   │   ├── LoginPage/        # Login page (LoginPage.js)
│   │   └── RegisterPage/     # User registration page (RegisterPage.js)
│   ├── utils/                # Utility functions and helpers
│   ├── App.css               # Global styling for the app
│   ├── App.js                # Main React component
│   ├── App.test.js           # Tests for the App component
│   ├── index.css             # Styling for the index page
│   ├── index.js              # React entry point
│   ├── logo.svg              # App logo
│   ├── reportWebVitals.js    # Web performance metrics
│   └── setupTests.js         # Test setup configuration
├── .env                      # Environment variables for configuration
├── .gitignore                # Git ignore file to exclude unnecessary files
├── package-lock.json         # Lock file for project dependencies
└── package.json              # Project dependencies and scripts
