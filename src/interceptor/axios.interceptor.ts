import axios, { AxiosRequestConfig } from 'axios';

export const api = axios.create({
	baseURL: process.env.REACT_APP_FAKE_STORE,
});

const updateHeader = (request: AxiosRequestConfig<any>) => {
	const token = localStorage.getItem('x-token');
	console.log({ token });
	const newHeaders = {
		'Content-type': 'application/json',
		'x-token': token,
	};

	request.headers = newHeaders;

	return request;
};

// TODO: Configuración de interceptors
api.interceptors.request.use((request) => {
	return updateHeader(request);
});

api.interceptors.response.use(
	(response) => response,
	function (error) {
		if (error.message === 'canceled') return Promise.resolve();

		if (error.message.status === 401 || error.message.status === 403) {
			//* REFRESHTOKEN
		}

		return Promise.reject(error);
	}
);

export default api;
