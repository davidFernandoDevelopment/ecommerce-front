import { useMemo } from 'react';
import { toast } from 'react-toastify';
import { StateIconAction } from '../bemit/components';
import {
	changeProductInCart,
	deleteProductInCart,
} from '../modules/cart/store';
import { useAppDispatch, useAppSelector } from '../store';
import { Product } from '../modules/product/models/product.model';

export const useCart = (id: string, pdx: Product) => {
	const dispatch = useAppDispatch();
	const { products } = useAppSelector((state) => state.cart);

	const product = useMemo(() => {
		return products.find((p) => p.productId.toString() === id);
		//eslint-disable-next-line
	}, [products, id]);

	const handleActionCart = (state: StateIconAction) => {
		if (state === 'active') {
			//* TODO: ADD PRODUCT IN SHOPPING-CART.
			console.log('PRODUCT ADDED !!!');
			toast.success('Producto agregado al carrito');
			dispatch(
				changeProductInCart({
					quantity: 1,
					image: pdx.image,
					price: pdx.price,
					title: pdx.title,
					productId: pdx.id,
					subtotal: pdx.price,
				})
			);
		} else if (state === 'default') {
			//* TODO: REMOVE PRODUCT FROM SHOPPING-CART.
			console.log('REMOVE PRODUCT IN CART');
			dispatch(deleteProductInCart(pdx.id));
		}
	};

	const addProductCart = (quantity: number) => {
		toast.success('Producto agregado al carrito');
		dispatch(
			changeProductInCart({
				quantity,
				image: pdx.image,
				price: pdx.price,
				title: pdx.title,
				productId: pdx.id,
				subtotal: pdx.price,
			})
		);
	};

	const removeProductCart = (id: string) => {
		console.log('REMOVE PRODUCT IN CART');
		dispatch(deleteProductInCart(id));
	};

	return {
		product,
		addProductCart,
		handleActionCart,
		removeProductCart,
	};
};
