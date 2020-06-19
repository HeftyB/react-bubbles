import React from "react";
import useForm from "./useForm";
import axiosWithAuth from "../protected/axiosWithAuth";
import { useHistory } from "react-router-dom";

const initialForm = {
	username: "",
	password: "",
};

const Login = () => {
	const [loginForm, setLoginForm] = useForm(initialForm);
	const { push } = useHistory();

	const sendLogin = () => {
		axiosWithAuth()
			.post("/api/login", loginForm)
			.then(res => {
				window.localStorage.setItem("token", res.data.payload);
				push("/Home");
			})
			.catch(error => {
				console.log(error);
				debugger;
			});
	};

	return (
		<div className="logins">
			<h1>LOGIN PAGE</h1>
			<form
				onSubmit={event => {
					event.preventDefault();
					sendLogin();
				}}>
				<label>
					{" "}
					Username:{"  "}
					<input
						type="text"
						name="username"
						value={loginForm.username}
						onChange={setLoginForm}></input>
				</label>{" "}
				<label>
					Password:{"  "}
					<input
						type="text"
						name="password"
						value={loginForm.password}
						onChange={setLoginForm}></input>
				</label>
				<button>Submit</button>
			</form>
		</div>
	);
};

export default Login;
