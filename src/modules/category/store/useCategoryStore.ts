import { api } from '../../../interceptor';
import { getCategory, setCategories, searchCategory } from './categorySlice';
import { useAppDispatch, useAppSelector } from '../../../store';
import { Product } from '../../product';

export const useCategoryStore = () => {
	const dispatch = useAppDispatch();
	const { categories, resultCategories } = useAppSelector(
		(state) => state.category
	);

	const startSetCategories = async () => {
		try {
			const { data } = await api.get('products/categories');
			dispatch(setCategories(data));
		} catch (error) {}
	};

	const startGetCategory = async (category: string) => {
		try {
			const { data } = await api.get<Product[]>(
				`products/category/${category}`
			);
			dispatch(getCategory(data));
		} catch (error) {}
	};

	const syncSearchCategory = (category: string) => {
		dispatch(searchCategory(category));
	};

	return {
		//* PROPIEDADES
		categories,
		resultCategories,

		//* METODOS
		startGetCategory,
		startSetCategories,

		syncSearchCategory,
	};
};
