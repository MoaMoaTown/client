import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: `http://${process.env.REACT_APP_ENDPOINT}`,
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Credentials': true,
  },
});
