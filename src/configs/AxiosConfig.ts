import axios, { AxiosInstance } from 'axios';

const publicRequest: AxiosInstance = axios.create({
	baseURL: '',
	timeout: 10000,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
});

publicRequest.interceptors.response.use(
	(response) => response?.data?.data || response?.data || response,
	(error) => {
		return Promise.reject({
			statusCode: error?.response?.status,
			message: error?.response?.data?.message || error?.response?.data?.detail || error?.response?.data,
		});
	},
);

export { publicRequest };
