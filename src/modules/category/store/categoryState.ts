import { Product } from '../../product';
import { Category } from '../models';

export interface CategoryState {
	categories: Category[];
	resultCategories: Category[];
	currentCategory: Product[];
}

export const initialState: CategoryState = {
	categories: [],
	resultCategories: [],
	currentCategory: [],
};
