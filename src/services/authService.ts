import { Credentials } from '../modules/auth';
import api from '../interceptor/axios.interceptor';

export const loginService = (credentials: Credentials) => {
	return api.post<Credentials>('auth', credentials);
};
