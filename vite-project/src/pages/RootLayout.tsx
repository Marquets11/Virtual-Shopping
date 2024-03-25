import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout() {
	return (
		<>
			<Header />
			<div className="h-24 sm:h-16"></div>
			<Outlet />
			<Footer />
		</>
	);
}
