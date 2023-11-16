// axios
import axios, { AxiosInstance } from 'axios';

const publicRequest: AxiosInstance = axios.create({
	baseURL: 'http://localhost:5000/api',
	timeout: 10000,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
});

publicRequest.interceptors.response.use(
	(response) => response?.data || response?.data?.data || response,
	(error) => {
		// Handle errors globally (e.g., show a notification, redirect, etc.)
		console.error('Axios request failed:', error);
		return Promise.reject(error);
	},
);

export { publicRequest };
