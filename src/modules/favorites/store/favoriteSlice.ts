import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Product } from '../../product';
import { initialState, FavoriteState } from './favoriteState';

export const favoriteSlice = createSlice({
	name: 'favorite',
	initialState,
	reducers: {
		addFavorite: (
			state: FavoriteState,
			{ payload }: PayloadAction<Product>
		) => {
			state.products = [...state.products, payload];
		},
		removeFavorite: (
			state: FavoriteState,
			{ payload }: PayloadAction<string>
		) => {
			state.products = state.products.filter(
				(p) => p.id.toString() !== payload
			);
		},
	},
});

export default favoriteSlice.reducer;
export const { addFavorite, removeFavorite } = favoriteSlice.actions;
