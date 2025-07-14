import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const fetchPrice = async () => {
  const res = await axios.get(`${BASE_URL}/price`);
  return res.data;
};

export const fetchBalance = async () => {
  const res = await axios.get(`${BASE_URL}/balance`);
  return res.data;
};

export const fetchLogs = async () => {
  const res = await axios.get(`${BASE_URL}/logs`);
  return res.data;
};
