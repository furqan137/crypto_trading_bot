import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const startBot = async () => {
  const res = await axios.post(`${BASE_URL}/bot/start`);
  return res.data;
};

export const stopBot = async () => {
  const res = await axios.post(`${BASE_URL}/bot/stop`);
  return res.data;
};

export const getBotStatus = async () => {
  const res = await axios.get(`${BASE_URL}/bot/status`);
  return res.data;
};
