import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ProductCart } from '../models';
import { CartState, initialState } from './cartState';

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		changeProductInCart: (
			state: CartState,
			{ payload }: PayloadAction<ProductCart>
		) => {
			const { productId, quantity = 1 } = payload;
			let existProductInCart = state.products.find(
				(p) => p.productId === productId
			);

			if (existProductInCart) {
				const { price, productId } = existProductInCart;
				let subtotal = price * quantity;
				let totalPrev = state.products
					.filter((prev) => prev.productId !== productId)
					.map((prev) => prev.subtotal)
					.reduce((prev, current) => prev + current, 0);

				state.total = totalPrev + subtotal;
				state.products = state.products.map((p) =>
					p.productId === productId ? { ...p, quantity, subtotal } : p
				);
			} else {
				state.total = state.total + payload.price;
				state.products = [
					...state.products,
					{
						...payload,
						quantity: 1,
					},
				];
			}
		},
		deleteProductInCart: (
			state: CartState,
			{ payload: id }: PayloadAction<number>
		) => {
			state.products = state.products.filter((p) => p.productId !== id);
			state.total = state.products
				.map((p) => p.subtotal)
				.reduce((prev, current) => prev + current, 0);
		},
	},
});

export default cartSlice.reducer;
export const { changeProductInCart, deleteProductInCart } = cartSlice.actions;
