import { configureStore } from '@reduxjs/toolkit';

//* SLICES DE LA APP
import authSliceReducer from '../modules/auth/store/authSlice';
import cartSliceReducer from '../modules/cart/store/cartSlice';
import productSliceReducer from '../modules/product/store/productSlice';

export const store = configureStore({
	reducer: {
		auth: authSliceReducer,
		cart: cartSliceReducer,
		product: productSliceReducer,
	},
});
