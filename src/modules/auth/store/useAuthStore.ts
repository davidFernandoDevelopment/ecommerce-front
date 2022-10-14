import { Credentials } from '../';
import { loginService } from '../../../services';
import { onChecking } from './authSlice';
import { useAppDispatch, useAppSelector } from '../../../store';

export const useAuthStore = () => {
	const dispatch = useAppDispatch();
	const { user } = useAppSelector((state) => state.auth);

	const startLogin = async (credentials: Credentials) => {
		try {
			dispatch(onChecking());
			const { data } = await loginService(credentials);
			console.log('RESPONSE DATA: ', { data });
			// dispatch(onLogin(user.data));
		} catch (err) {
			console.log(err);
		}
	};

	// const startChecking => (): Status => {

	// }

	return {
		//* PROPIEDADES
		user,
		//* MÉTODOS
		startLogin,
	};
};
