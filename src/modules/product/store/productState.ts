import { Product } from '../models';

export interface ProductState {
	products: Product[];
	productCurrent: Product | null;
}

export const initialState: ProductState = {
	products: [],
	productCurrent: null,
};
