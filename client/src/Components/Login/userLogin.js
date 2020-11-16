import React, { Component } from "react";

class userLogin extends Component {
	handleLogin = () => {
		window.location.href = "/auth/google";
	};
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-6 m-auto">
						<div className="m-b-20">
							<h6 style={{ padding: "5.5rem", paddingBottom: "1.5rem" }}>
								Sign In To Your Account
							</h6>
						</div>
						<div className="m-b-20">
							<form method="post">
								<div className="form-group">
									<input
										className="form-control"
										type="email"
										placeholder="Email"
										style={{ marginBottom: "1rem" }}
									/>
									<input
										className="form-control"
										type="password"
										placeholder="Password"
									/>
								</div>
								<div className="form-group">
									<button className="btn btn-block btn-round btn-brand">
										Login
									</button>
								</div>
							</form>
						</div>
						<div>
							<button
								className="btn btn-block btn-round btn-brand"
								onClick={this.handleLogin}
							>
								Login via Google
							</button>
						</div>
						<div className="m-b-20" style={{ paddingLeft: "3rem" }}>
							<p>
								<small>
									Don't have an account yet?
									<a href="/userRegister">Create an account</a>
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
export default userLogin;
