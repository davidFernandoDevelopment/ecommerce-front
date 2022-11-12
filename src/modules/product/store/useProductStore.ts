import { api } from '../../../interceptor';
import { setProducts } from './productSlice';
import { useAppDispatch, useAppSelector } from '../../../store';
import { Product } from '../models/product.model';

export const useProductStore = () => {
	const dispatch = useAppDispatch();
	const { products } = useAppSelector((state) => state.product);

	const startSetProducts = async () => {
		try {
			const { data } = await api.get<Product[]>('products');
			data[0].image = '';
			dispatch(setProducts(data));
		} catch (error) {}
	};

	return {
		products,

		startSetProducts,
	};
};
