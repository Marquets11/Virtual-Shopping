import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout() {
	return (
		<div>
			<Header />
			<div className="h-16"></div>
			<Outlet />
			<Footer />
		</div>
	);
}
