// axios
import axios, { AxiosInstance } from 'axios';
// lodash
import { isEmpty } from 'lodash';
// utils
import { getAccessToken } from '@/utils/cookies/cookieStorage';

const publicRequest: AxiosInstance = axios.create({
	baseURL: '',
	timeout: 10000,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
});

publicRequest.interceptors.request.use(
	(config) => {
		if (typeof window === undefined) {
			return config;
		}

		const token = getAccessToken();
		console.log(token);
		config.headers.Authorization = !isEmpty(token) ? `Bearer ${token}` : '';
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

publicRequest.interceptors.response.use((response) => {
	return response?.data || response?.data?.data || response;
});

export { publicRequest };
