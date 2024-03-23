import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout, useUser } from "../redux/user/slice";
import Cart from "./Cart";

export default function Header() {
	const user = useSelector(useUser);
	const dispatch = useDispatch();

	return (
		<div className="bg-white fixed w-full z-10">
			<nav className="flex flex-wrap gap-5 p-5 justify-end">
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
				<button className="nav-button">
					<Cart />
				</button>
			</nav>
		</div>
	);
}
