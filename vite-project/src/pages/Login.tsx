import FormLogin from "../components/FormLogin";

export default function Login() {
	return (
		<div className="bg-stone-800 h-screen">
			<main className="flex flex-col gap-5 items-center justify-center px-5 py-40 h-full">
				<h1 className="text-white font-thin text-5xl">Login</h1>
				<FormLogin />
			</main>
		</div>
	);
}
