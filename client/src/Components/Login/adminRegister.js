import React, { Component } from "react";
import axios from "axios";

class adminRegister extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			email: "",
			password: "",
			firstName: "",
			lastName: "",
			adminUsername: "",
		};
	}

	handleUsername = (e) => {
		this.setState({ username: e.target.value });
	};

	handleEmail = (e) => {
		this.setState({ email: e.target.value });
	};

	handlePassword = (e) => {
		this.setState({ password: e.target.value });
	};

	handleFirstname = (e) => {
		this.setState({ firstName: e.target.value });
	};
	handleLastname = (e) => {
		this.setState({ lastName: e.target.value });
	};
	handleAdminUsername = (e) => {
		this.setState({ adminUsername: e.target.value });
	};

	handleLogin = (e) => {
		e.preventDefault();
		const details = {
			username: this.state.username,
			email: this.state.email,
			password: this.state.password,
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			adminUsername: this.state.adminUsername,
		};
		console.log(details);
		axios
			.post("http://localhost:5000/adminRegister", details)
			.then((res) => console.log(res.data))
			.then(() => {
				window.location.href = "/editCelebrities";
			});
	};
	handleLogingoogle = () => {
		window.location.href = "/auth/google";
	};
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-6 m-auto">
						<div className="m-b-20">
							<h6 style={{ padding: "5.5rem", paddingBottom: "1.5rem" }}>
								Sign Up
							</h6>
						</div>
						<div className="m-b-20">
							<form method="post" action="/dashboard">
								<div className="form-group">
									<input
										className="form-control"
										type="username"
										placeholder="Username"
										style={{ marginBottom: "1rem" }}
										onChange={this.handleUsername}
									/>
									<input
										className="form-control"
										type="email"
										placeholder="Eamil"
										style={{ marginBottom: "1rem" }}
										onChange={this.handleEmail}
									/>
									<input
										className="form-control"
										type="password"
										placeholder="Password"
										style={{ marginBottom: "1rem" }}
										onChange={this.handlePassword}
									/>
									<input
										className="form-control"
										type="name"
										placeholder="First Name"
										style={{ marginBottom: "1rem" }}
										onChange={this.handleFirstname}
									/>
									<input
										className="form-control"
										type="name"
										placeholder="Last Name"
										style={{ marginBottom: "1rem" }}
										onChange={this.handleLastname}
									/>
									<input
										className="form-control"
										type="username"
										placeholder="Username of existing admin"
										style={{ marginBottom: "1rem" }}
										onChange={this.handleAdminUsername}
									/>
								</div>
								<div className="form-group">
									<button
										className="btn btn-block btn-round btn-brand"
										onClick={this.handleLogin}
									>
										Create
									</button>
								</div>
							</form>
						</div>

						<div className="m-b-20" style={{ paddingLeft: "3rem" }}>
							<p>
								<small>
									Already have an account?
									<a href="/adminLogin">Sign In</a>
									<br />
									Forgot your password?
									<a href="/">Recover account</a>
								</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default adminRegister;
