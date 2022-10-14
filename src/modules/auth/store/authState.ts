import { Status, User } from '../';
import { Error } from '../../../services';

export interface AuthState {
	status: Status;
	user: User | null;
	error: Error | null;
}

export const initialState: AuthState = {
	user: null,
	error: null,
	status: 'checking',
};
