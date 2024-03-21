import { useSelector } from "react-redux";
import { useProducts } from "../redux/products/slice";
import CardBuy from "../components/CardBuy";

export default function Home() {
	const products = useSelector(useProducts);

	return (
		<div className="bg-stone-800 min-h-screen py-12">
			<div className="flex flex-wrap gap-5 p-5">
				{products &&
					products.map(({ name, image, id, price }) => (
						<CardBuy id={id} image={image} name={name} price={price} />
					))}
			</div>
		</div>
	);
}
