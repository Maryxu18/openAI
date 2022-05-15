import axios from 'axios';
const endpoint = 'https://api.openai.com/v1/engines/';

const api = axios.create({
  baseURL: endpoint,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_OPENAI_SECRET}`
  }
});

export default api;
