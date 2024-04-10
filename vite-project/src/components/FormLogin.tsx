import { useRef } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/user/slice";
import { useNavigate } from "react-router-dom";

export default function FormLogin() {
	const emailRef = useRef("");
	const passwordRef = useRef("");
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const submitLogin = (ev: React.FormEvent<HTMLFormElement>) => {
		ev.preventDefault();
		if (emailRef.current && passwordRef.current) {
			dispatch(
				login({
					email: emailRef.current,
					password: passwordRef.current,
				})
			);

			navigate("/");
		}
	};

	return (
		<>
			<form
				onSubmit={(ev) => submitLogin(ev)}
				className="flex flex-col w-full sm:w-96 gap-3"
			>
				<div className="relative">
					<span className="absolute login-label-form" aria-label="email">
						Email
					</span>
					<input
						type="email"
						className="login-input-form pl-12"
						required
						onChange={(ev) => (emailRef.current = ev.target.value)}
					/>
				</div>
				<div className="relative">
					<span className="absolute login-label-form" aria-label="password">
						Password
					</span>
					<input
						type="password"
						className="login-input-form pl-[5rem]"
						required
						onChange={(ev) => (passwordRef.current = ev.target.value)}
					/>
				</div>
				<button className="rounded-full bg-stone-900 mx-auto py-1 px-6 text-white font-mono hover:bg-black hover:ring-1 hover:ring-white">
					Submit
				</button>
			</form>
		</>
	);
}
