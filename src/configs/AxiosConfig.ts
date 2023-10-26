// axios
import axios, { AxiosInstance } from 'axios';

const publicRequest: AxiosInstance = axios.create({
	baseURL: 'http://localhost:5000',
	timeout: 10000,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
});

publicRequest.interceptors.response.use((response) => {
	return response?.data || response?.data?.data || response;
});

export { publicRequest };
