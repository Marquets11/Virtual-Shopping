import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	addProductToCart,
	removeProductToCart,
	subProductToCart,
	useCart,
} from "../redux/cart/slice";
import { Products } from "../redux/products/slice";
import { FaPlus, FaMinus } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import {
	selectQuantityItemsInCart,
	selectTotalPriceInCart,
} from "../redux/cart/selector";

export default function Cart() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const cart = useSelector(useCart);
	const dispatch = useDispatch();

	return (
		<>
			<button className="nav-button" onClick={() => setIsMenuOpen(() => true)}>
				Cart{" "}
				{cart.items &&
					cart.items.length > 0 &&
					`(${selectQuantityItemsInCart(cart)})`}
			</button>
			<div
				className={
					isMenuOpen
						? "flex min-h-screen w-screen bg-stone-800 bg-opacity-40 absolute right-0 top-0 hover:cursor-default"
						: "hidden"
				}
			>
				<div
					className="w-full"
					onClick={() => setIsMenuOpen((prev) => !prev)}
				></div>
				<section className="menu-open py-2 px-2 flex flex-col gap-5">
					<h2 className="text-2xl font-extrabold">Your Cart</h2>
					{cart &&
						cart.items &&
						cart.items.map(({ product, quantity }) => (
							<div key={product.id} className="mx-auto flex flex-col">
								<div className="relative">
									<img
										src={product.image}
										alt={product.name}
										className="rounded-lg w-60 h-72 object-cover shadow-xl border-2 border-black"
									/>
									<button
										className="absolute right-2 top-2"
										onClick={() => dispatch(removeProductToCart(product))}
									>
										<RiDeleteBin5Fill />
									</button>
								</div>
								<div className="flex justify-around">
									<nav className="flex gap-2">
										<button
											disabled={quantity === 1 ? true : false}
											className={quantity === 1 ? "text-transparent" : ""}
											onClick={() =>
												dispatch(subProductToCart(product as Products))
											}
										>
											<FaMinus />
										</button>
										<p className="text-lg">{quantity}</p>
										<button
											onClick={() =>
												dispatch(addProductToCart(product as Products))
											}
										>
											<FaPlus />
										</button>
									</nav>
									<h3 className="font-bold text-xl">$ {product.price}</h3>
								</div>
							</div>
						))}
					{cart.items && cart.items.length > 0 && (
						<h3 className="font-semibold">
							Total: $ {selectTotalPriceInCart(cart)}
						</h3>
					)}
				</section>
			</div>
		</>
	);
}
