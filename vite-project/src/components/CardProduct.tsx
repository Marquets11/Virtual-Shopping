import { useRef, useState } from "react";
import { Products } from "../redux/products/slice";
import SizeRadioButton from "./SizeRadioButton";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../redux/cart/slice";

export default function CardProduct(product: Products) {
	interface Size {
		value: "P" | "M" | "G" | "XG";
	}

	const [enableCartButton, setEnableCartButton] = useState(true);
	const sizeRef = useRef({ value: "P" } as Size);
	const dispatch = useDispatch();

	const addProduct = () => {
		dispatch(addProductToCart({ product, size: sizeRef.current.value }));
	};

	const changeTheSize = (size: "P" | "M" | "G" | "XG") => {
		setEnableCartButton(false);
		sizeRef.current.value = size;
	};

	return (
		<>
			<main className="px-5 py-10 flex flex-wrap gap-1 md:p-5 md:gap-5 md:flex-nowrap">
				<img
					src={product.image}
					alt={product.name}
					className="w-64 h-80 object-cover rounded-lg shadow-lg shadow-black mx-auto"
				/>

				<section className="flex flex-wrap justify-center sm:justify-between items-center w-full gap-2 md:py-24">
					<h1 className="text-white font-extralight text-lg max-w-72 max-h-16 sm:max-h-24 sm:max-w-96 break-words overflow-auto">
						{product.name}
					</h1>
					<h2 className="text-white font-bold text-2xl underline underline-offset-4">
						$ {product.price}
					</h2>

					<ul className="flex w-full gap-2 justify-center sm:justify-normal">
						<li onChange={() => changeTheSize("P")}>
							<SizeRadioButton size="P" />
						</li>
						<li onChange={() => changeTheSize("M")}>
							<SizeRadioButton size="M" />
						</li>
						<li onChange={() => changeTheSize("G")}>
							<SizeRadioButton size="G" />
						</li>
						<li onChange={() => changeTheSize("XG")}>
							<SizeRadioButton size="XG" />
						</li>
					</ul>

					<button
						disabled={enableCartButton}
						onClick={() => addProduct()}
						className="text-white font-bold bg-stone-900 py-1 md:py-3 px-3 w-full rounded-full enabled:hover:bg-black enabled:hover:ring-2 enabled:hover:ring-white"
					>
						Add to cart
					</button>
				</section>
			</main>
		</>
	);
}
