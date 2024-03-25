import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Products } from "../products/slice";

export interface Cart {
	items: {
		product: Products;
		quantity: number;
		size: "P" | "M" | "G" | "XG";
	}[];
}

const initialState: Cart = {
	items: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		// Add a Product to the Cart
		addProductToCart(
			state,
			{
				payload,
			}: PayloadAction<{ product: Products; size: "P" | "M" | "G" | "XG" }>
		) {
			const itemAlreadyInCart = state.items.find(
				({ product, size }) =>
					product.id === payload.product.id && size === payload.size
			);

			if (itemAlreadyInCart) {
				return {
					items: state.items.map((item) =>
						item.product.id === payload.product.id && item.size === payload.size
							? {
									...item,
									quantity: item.quantity + 1,
									// product: item.product,
									// size: item.size,
							  }
							: item
					),
				};
			}

			return {
				items: [
					...state.items,
					{ product: payload.product, quantity: 1, size: payload.size },
				],
			};
		},
		//Subtract a Product in the Cart
		subProductToCart(
			state,
			{
				payload,
			}: PayloadAction<{ product: Products; size: "P" | "M" | "G" | "XG" }>
		) {
			const itemAlreadyInCart = state.items.find(
				({ product, size }) =>
					product.id === payload.product.id && size === payload.size
			);

			if (itemAlreadyInCart) {
				if (itemAlreadyInCart.quantity > 1) {
					return {
						items: state.items.map((item) =>
							item.product.id === payload.product.id &&
							item.size === payload.size
								? { ...item, quantity: item.quantity - 1 }
								: item
						),
					};
				}

				removeProductToCart(payload);
			}
		},
		removeProductToCart(
			state,
			{
				payload,
			}: PayloadAction<{ product: Products; size: "P" | "M" | "G" | "XG" }>
		) {
			return {
				items: state.items.filter(
					({ product, size }) =>
						product.id !== payload.product.id || size !== payload.size
				),
			};
		},
	},
});

export const cart = cartSlice.reducer;
export const { addProductToCart, subProductToCart, removeProductToCart } =
	cartSlice.actions;
export const useCart = (state: any) => {
	return state.cart as Cart;
};
