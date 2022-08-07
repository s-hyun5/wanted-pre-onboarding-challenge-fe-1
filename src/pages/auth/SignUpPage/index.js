import React, { useEffect, useState } from "react";
import axios from "axios";

const SignUpPage = () => {
	const [email, setEmail] = useState("");
	const [hasEmailError, setHasEmailError] = useState(false);
	const [password, setPassword] = useState("");
	const [hasPasswordError, setHasPasswordError] = useState(false);

	const EMAIL_CHECK = /\w+@\w+\.\w+(\.\w+)?/;
	const PASSWORD_CHECK = /^[A-Za-z0-9]{8,}$/;

	useEffect(() => {
		isValidEmail(email);
		isValidPassword(password);
	}, [email, password]);

	function isValidEmail(email) {
		if (EMAIL_CHECK.test(email)) {
			setHasEmailError(false);
		} else {
			setHasEmailError(true);
		}
	}

	function isValidPassword(password) {
		if (PASSWORD_CHECK.test(password)) {
			setHasPasswordError(false);
		} else {
			setHasPasswordError(true);
		}
	}

	const signupRequest = () => {
		axios
			.post(`http://localhost:8080/users/create`, {
				email: email,
				password: password,
			})
			.then((response) => {
				console.log("response.data", response.data);
			})
			.catch((response) => {
				console.log("Error!");
			});
	};

	const handleSubmit = () => {
		console.log("email:", email, "// password:", password);
		signupRequest();
	};

	return (
		<div>
			<form>
				<div style={{ display: "flex" }}>
					<label>이메일</label>
					<input
						type={"email"}
						name="password"
						value={email}
						required
						autoComplete={"new-password"}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div style={{ display: "flex" }}>
					<label>비밀번호</label>
					<input
						type={"password"}
						name="password"
						value={password}
						required
						autoComplete={"new-password"}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button
					type={"button"}
					onClick={handleSubmit}
					disabled={hasEmailError || hasPasswordError}
				>
					회원가입
				</button>
			</form>
		</div>
	);
};

export default SignUpPage;
