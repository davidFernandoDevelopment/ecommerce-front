import axios, { AxiosRequestConfig } from 'axios';

const ecommerceApi = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
});

ecommerceApi.interceptors.request.use((config: AxiosRequestConfig<any>) => {
	// config.headers = {
	// 	...config.headers,
	// 	'x-token': localStorage.getItem('token'),
	// };

	return config;
});
