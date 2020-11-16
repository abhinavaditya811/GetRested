import React, { Component } from "react";

class adminLogin extends Component {
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
						<div className="m-b-20" style={{ paddingLeft: "3rem" }}>
							<p>
								<small>
									Don't have an account yet?
									<a href="/adminRegister">Create an account</a>
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
export default adminLogin;
