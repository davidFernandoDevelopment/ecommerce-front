import { useMemo } from 'react';
import { toast } from 'react-toastify';

import {
	addFavorite,
	removeFavorite,
} from '../modules/favorites/store/favoriteSlice';
import { Product } from '../modules/product';
import { StateIconAction } from '../bemit/components';
import { useAppDispatch, useAppSelector } from '../store';

export const useFav = (id: string, pdx: Product) => {
	const dispatch = useAppDispatch();
	const { products } = useAppSelector((state) => state.favorite);
	const product = useMemo(
		() => products.find((p) => p.id.toString() === id),
		[products, id]
	);

	const handleActionFav = (state: StateIconAction) => {
		console.log({ state });
		if (state === 'active') {
			dispatch(addFavorite(pdx));
			toast.success('Producto agregado a favoritos');
			return;
		}
		dispatch(removeFavorite(id));
	};

	return {
		product,
		handleActionFav,
	};
};
