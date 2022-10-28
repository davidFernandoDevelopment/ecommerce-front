import { Category } from '../models';

export interface CategoryState {
	categories: Category[];
	resultCategories: Category[];
	currentCategory: Category | null;
}

export const initialState: CategoryState = {
	categories: [],
	resultCategories: [],
	currentCategory: null,
};
