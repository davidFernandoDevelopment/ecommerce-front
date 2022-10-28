import { api } from '../../../interceptor';
import { setProducts } from './productSlice';
import { useAppDispatch, useAppSelector } from '../../../store';

export const useProductStore = () => {
	const dispatch = useAppDispatch();
	const { products } = useAppSelector((state) => state.product);

	const startSetProducts = async () => {
		try {
			const { data } = await api.get('products');
			dispatch(setProducts(data));
		} catch (error) {}
	};

	return {
		products,

		startSetProducts,
	};
};
