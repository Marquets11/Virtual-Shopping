import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useProducts } from "../redux/products/slice";
import CardProduct from "../components/CardProduct";

export default function ProductDetails() {
	const productId = useParams().productId;
	const products = useSelector(useProducts);
	const productDetails = products.find(({ id }) => id === productId);

	return (
		<div className="bg-stone-800 h-screen py-14 flex justify-center md:items-center">
			{productDetails ? (
				<CardProduct
					key={productDetails.id}
					id={productDetails.id}
					name={productDetails.name}
					image={productDetails.image}
					price={productDetails.price}
				/>
			) : (
				<h1 className="m-auto text-white font-extrabold text-3xl text-center">
					Produto não encontrado
				</h1>
			)}
		</div>
	);
}
