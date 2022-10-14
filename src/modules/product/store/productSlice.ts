import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Product } from '../models';
import { initialState, ProductState } from './productState';

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		setProducts: (state: ProductState, action: PayloadAction<Product[]>) => {
			return {
				...state,
				products: [...state.products, ...action.payload],
			};
		},
	},
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
