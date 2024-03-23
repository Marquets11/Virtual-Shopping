import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	addProductToCart,
	subProductToCart,
	useCart,
} from "../redux/cart/slice";
import { Products } from "../redux/products/slice";

export default function Cart() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const cart = useSelector(useCart);
	const dispatch = useDispatch();

	return (
		<>
			<a onClick={() => setIsMenuOpen((prev) => !prev)}>Cart</a>
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
				<section className="menu-open py-2 px-1 flex flex-col gap-5 overflow-y-scroll">
					<h1 className="font-mono text-2xl">Cart</h1>
					{cart &&
						cart.items &&
						cart.items.map(({ product, quantity }) => (
							<div key={product.id} className="mx-auto flex flex-col">
								<img
									src={product.image}
									alt={product.name}
									className="rounded-lg w-52 h-60 object-cover"
								/>
								<div className="flex justify-around">
									<nav className="flex gap-2">
										<button
											onClick={() =>
												dispatch(subProductToCart(product as Products))
											}
										>
											▼
										</button>
										{quantity}
										<button
											onClick={() =>
												dispatch(addProductToCart(product as Products))
											}
										>
											▲
										</button>
									</nav>
									<h3 className="font-semibold">$ {product.price}</h3>
								</div>
							</div>
						))}
				</section>
			</div>
		</>
	);
}
