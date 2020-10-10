import React, { Component } from "react";

class Footer extends Component {
	render() {
		return (
			<section className="footer">
				<div className="py-19 py-sm-23 py-lg-25">
					<div className="row align-items-center">
						<div
							className="col-12 col-md-6 col-lg-2 mb-14 mb-md-0"
							style={{ marginLeft: "150px" }}
						>
							<div className="d-flex align-items-center justify-content-center justify-content-md-start">
								<a href="/" className="footer-brand">
									Fight The Mind
								</a>
							</div>
						</div>
						<div
							className="col-12 col-12 col-lg-2 mb-14 mb-md-0"
							style={{ marginLeft: "300px" }}
						>
							<a
								href="#"
								data-toggle="smooth-scroll"
								data-target="#page-start-anchor"
							>
								<i class="material-icons">arrow_upward</i>
							</a>
						</div>
						<div
							className="col-12 col-12 col-lg-2 mb-14 mb-md-0"
							style={{ marginLeft: "180px" }}
						>
							<ul className="footer-menu">
								<li>
									<a href="#">Privacy Policy</a>
								</li>
								<li>
									<a href="#">T and C</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Footer;
