import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout, useUser } from "../redux/user/slice";
import Cart from "./Cart";

export default function Header() {
	const user = useSelector(useUser);
	const dispatch = useDispatch();

	return (
		<div className="bg-white fixed w-full z-10 flex flex-wrap gap-5 justify-center sm:justify-between px-10 py-5">
			<h1 className="text-2xl font-extralight">Virtual Shopping</h1>
			<nav className="flex flex-wrap gap-5">
				<button className="nav-button">
					<Link to={"/"}>Home</Link>
				</button>
				{user && !user.currentUser ? (
					<button className="nav-button">
						<Link to={"/login"}>Login</Link>
					</button>
				) : (
					<button className="nav-button" onClick={() => dispatch(logout())}>
						Logout
					</button>
				)}
				<Cart />
			</nav>
		</div>
	);
}
