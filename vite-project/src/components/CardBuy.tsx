import { Link } from "react-router-dom";
import { Products } from "../redux/products/slice";

export default function CardBuy(product: Products) {
	return (
		<main key={product.id} className="flex flex-col mx-auto">
			<section className="card-zoom">
				<img
					src={product.image}
					alt={product.name}
					className="card-zoom-image"
				/>
				<button className="card-zoom-button">
					<Link to={`/product/${product.id}`}>Buy</Link>
				</button>
			</section>

			<div className="flex justify-around">
				<h3 className="font-extralight text-stone-400 w-36 overflow-ellipsis overflow-hidden">
					{product.name}
				</h3>
				<p className="font-bold text-white">$ {product.price}</p>
			</div>
		</main>
	);
}
