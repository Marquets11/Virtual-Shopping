import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Products } from "../products/slice";

interface Cart {
	items: {
		product: Partial<Products>;
		quantity: number;
	}[];
}

const initialState: Cart = {
	items: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addProductToCart(state, { payload }: PayloadAction<Products>) {
			const itemAlreadyInCart = state.items.find(
				(item) => item.product.id === payload.id
			);

			if (itemAlreadyInCart) {
				return {
					items: state.items.map((item) =>
						item.product.id === payload.id
							? { product: item.product, quantity: item.quantity + 1 }
							: item
					),
				};
			}

			return {
				items: [...state.items, { product: payload, quantity: 1 }],
			};
		},
		subProductToCart(state, { payload }: PayloadAction<Products>) {
			const itemAlreadyInCart = state.items.find(
				(item) => item.product.id === payload.id
			);

			if (itemAlreadyInCart && itemAlreadyInCart.quantity > 1) {
				return {
					items: state.items.map((item) =>
						item.product.id === payload.id
							? { product: item.product, quantity: item.quantity - 1 }
							: item
					),
				};
			}
		},
		// removeProductToCart(state, { payload }: PayloadAction<>) {
		// 	return;
		// },
	},
});

export const cart = cartSlice.reducer;
export const { addProductToCart, subProductToCart } = cartSlice.actions;
export const useCart = (state: any) => {
	return state.cart as Cart;
};
