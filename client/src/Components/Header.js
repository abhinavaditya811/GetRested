import React, { Component } from "react";

class Header extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
				<a className="navbar-brand" href="#">
					Fight the Mind
				</a>
				<ul className="navbar-nav ml-auto">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Doctors
						</a>
					</li>
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Forum
						</a>
					</li>
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Celebrities
						</a>
					</li>
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Contact
						</a>
					</li>
					<li className="nav-item active">
						<a className="nav-link" href="#">
							About Us
						</a>
					</li>
					<li className="nav-item active">
						<a className="nav-link" href="/auth/google">
							Login
						</a>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Header;
