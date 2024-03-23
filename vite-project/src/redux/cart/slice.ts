import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Products } from "../products/slice";

export interface Cart {
	items: {
		product: Products;
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
		// Add a Product to the Cart
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
		//Subtract a Product in the Cart
		subProductToCart(state, { payload }: PayloadAction<Products>) {
			const itemAlreadyInCart = state.items.find(
				(item) => item.product.id === payload.id
			);

			if (itemAlreadyInCart) {
				if (itemAlreadyInCart.quantity > 1) {
					return {
						items: state.items.map((item) =>
							item.product.id === payload.id
								? { product: item.product, quantity: item.quantity - 1 }
								: item
						),
					};
				}

				removeProductToCart(payload);
			}
		},
		removeProductToCart(state, { payload: { id } }: PayloadAction<Products>) {
			return {
				items: state.items.filter(({ product }) => product.id !== id),
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
