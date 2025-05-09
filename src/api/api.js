import axios from 'axios';

// Create an Axios instance with the base URL defined in .env
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // This reads from the .env file
});

export default api;
