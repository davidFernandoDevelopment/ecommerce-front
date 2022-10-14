import { configureStore } from '@reduxjs/toolkit';

//* SLICES DE LA APP
import  authSliceReducer from '../modules/auth/store/authSlice';
import productSlice from '../modules/product/store/productSlice';

export const store = configureStore({
	reducer: {
		auth: authSliceReducer,
		product: productSlice
	},
});
