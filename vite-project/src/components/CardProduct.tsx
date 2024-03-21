import { useState } from "react";
import { Products } from "../redux/products/slice";
import SizeRadioButton from "./SizeRadioButton";

export default function CardProduct(product: Products) {
	const [enableCartButton, setEnableCartButton] = useState(true);

	return (
		<>
			<main className="p-5 flex gap-5 flex-wrap md:flex-nowrap">
				<img
					src={product.image}
					alt={product.name}
					className="w-64 h-80 object-cover rounded-lg shadow-lg shadow-black mx-auto"
				/>

				<section className="flex flex-wrap justify-between items-center w-full gap-2 md:py-24">
					<h1 className="text-white font-extralight text-lg">{product.name}</h1>
					<h2 className="text-white font-bold text-2xl underline underline-offset-4">
						$ {product.price}
					</h2>

					<ul className="flex w-full gap-2">
						<li onChange={() => setEnableCartButton(false)}>
							<SizeRadioButton size="P" />
						</li>
						<li onChange={() => setEnableCartButton(false)}>
							<SizeRadioButton size="M" />
						</li>
						<li onChange={() => setEnableCartButton(false)}>
							<SizeRadioButton size="G" />
						</li>
						<li onChange={() => setEnableCartButton(false)}>
							<SizeRadioButton size="XG" />
						</li>
					</ul>

					<button
						disabled={enableCartButton}
						className="text-white font-bold bg-stone-900 py-1 md:py-3 px-3 w-full rounded-full enabled:hover:bg-black enabled:hover:ring-2 enabled:hover:ring-white"
					>
						Add to cart
					</button>
				</section>
			</main>
		</>
	);
}
