import { Link } from "react-router-dom";

export default function Header() {
	return (
		<div className="bg-white">
			<nav className="flex flex-wrap gap-5 p-5 justify-end">
				<button className="nav-button">
					<Link to={"/"}>Home</Link>
				</button>
				<button className="nav-button">
					<Link to={"/login"}>Login</Link>
				</button>
				<button className="nav-button">
					<Link to={"/cart"}>Cart</Link>
				</button>
			</nav>
		</div>
	);
}
