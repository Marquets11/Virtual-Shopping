import { Cart } from "./slice";

export const selectTotalPriceInCart = (cart: Cart) => {
	const totalPrice = cart.items.reduce(
		(previousValue, currentItem) =>
			(previousValue += currentItem.product.price * currentItem.quantity),
		0
	);
	return totalPrice.toFixed(2);
};

export const selectQuantityItemsInCart = (cart: Cart) => {
	return cart.items.reduce(
		(previousValue, currentItem) => (previousValue += currentItem.quantity),
		0
	);
};
