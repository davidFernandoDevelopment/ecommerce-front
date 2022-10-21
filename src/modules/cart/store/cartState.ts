import { ProductCart } from '../models';

export interface CartState {
	total: number;
	products: ProductCart[];
}

export const initialState: CartState = {
	total: 0,
	products: [],
};
