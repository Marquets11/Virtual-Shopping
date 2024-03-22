import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
	return (
		<div className="bg-black flex justify-center items-center py-10">
			<nav className="flex flex-wrap gap-4">
				<button className="social-button">
					<FaYoutube />
					Youtube
				</button>
				<button className="social-button">
					<FaInstagram />
					Instagram
				</button>
				<button className="social-button">
					<FaFacebook />
					Facebook
				</button>
			</nav>
		</div>
	);
}
