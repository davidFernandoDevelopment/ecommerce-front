import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '../';
import { Error } from '../../../services';
import { AuthState, initialState } from './';

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		onChecking: (state: AuthState) => {
			state.user = null;
			state.error = null;
			state.status = 'checking';
		},
		onLogin: (state: AuthState, { payload }: PayloadAction<User>) => {
			state.error = null;
			state.user = payload;
			state.status = 'authenticated';
		},
		onLogout: (
			state: AuthState,
			{ payload }: PayloadAction<Error | undefined>
		) => {
			state.user = null;
			state.status = 'not-authenticated';
			state.error = payload ? payload : null;
		},
	},
});

export default authSlice.reducer;
export const { onLogin, onChecking, onLogout } = authSlice.actions;
