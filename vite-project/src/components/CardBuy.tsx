import { Products } from "../redux/products/slice";

export default function CardBuy(product: Products) {
	return (
		<main key={product.id} className="flex flex-col">
			<section className="card-zoom">
				<img
					src={product.image}
					alt={product.name}
					className="card-zoom-image"
				/>
				<button className="card-zoom-button">Buy</button>
			</section>

			<div className="flex justify-around">
				<h3 className="font-extralight text-stone-400">{product.name}</h3>
				<p className="font-bold text-white">$ {product.price}</p>
			</div>
		</main>
	);
}
