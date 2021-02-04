import React, { Component } from "react";

class userLogin extends Component {
	handleLogin = () => {
		window.location.href = "/auth/google";
	};
	render() {
		return (
			<div className="container">
				<div
					id="jarallax-container-0"
					style={{
						position: "absolute",
						top: "0px",
						left: "0px",
						width: "100%",
						height: "100%",
						overflow: "hidden",
						zIndex: "-100",
					}}
				>
					<img
						src="https://scontent.fdel3-2.fna.fbcdn.net/v/t1.0-9/146116407_1759643487538491_5198250389832251724_o.jpg?_nc_cat=107&ccb=2&_nc_sid=730e14&_nc_ohc=gHc24ANgziUAX_2uykW&_nc_ht=scontent.fdel3-2.fna&oh=8cfefe01142032fe6fe533e5d837ca5a&oe=604289FB"
						className="jarallax-img"
						style={{
							objectFit: "cover",
							objectPosition: "50% 50%",
							maxWidth: "none",
							position: "fixed",
							top: "0px",
							left: "0px",
							width: "1535px",
							height: "740.8px",
							overflow: "hidden",
							pointerEvents: "none",
							transformStyle: "preserve-3d",
							backfaceVisibility: "hidden",
							willChange: "transform, opacity",
							marginTop: "auto",
							transform: "translate3d(0px, 17.96px, 0px)",
						}}
						alt="..."
					/>
				</div>
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
