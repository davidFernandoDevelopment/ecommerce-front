import { Product } from '../../product';

export interface FavoriteState {
	products: Product[];
}

export const initialState: FavoriteState = {
	products: [],
};
