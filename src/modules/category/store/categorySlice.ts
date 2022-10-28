import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Category } from '../models/index';
import { initialState, CategoryState } from './categoryState';

export const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {
		setCategories: (
			state: CategoryState,
			{ payload }: PayloadAction<Category[]>
		) => {
			state.categories = [...state.categories, ...payload];
		},

		getCategory: (state: CategoryState, { payload }: PayloadAction<string>) => {
			state.currentCategory = payload;
		},

		searchCategory: (
			state: CategoryState,
			{ payload }: PayloadAction<string>
		) => {
			state.resultCategories = state.categories.filter((c) =>
				c.includes(payload)
			);
		},
	},
});

export default categorySlice.reducer;
export const { setCategories, getCategory, searchCategory } =
	categorySlice.actions;
