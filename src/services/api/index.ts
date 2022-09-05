import axios from 'axios';
import * as process from 'process';
import { responseInterceptor } from './Interceptors/ResponseInterceptor';
import { errorInterceptor } from './Interceptors/ErrorInterceptor';

const api = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    Authorization: `bearer ${process.env.TOKEN}`,
    Accept: 'application/json',
  },
  timeout: 5000,
});

api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error)
);

export default api;
