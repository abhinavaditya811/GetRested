import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<li className="nav-item active">
						<a className="nav-link" href="/userLogin">
							Login
						</a>
					</li>
				);
			default:
				return (
					<li className="nav-item active">
						<a className="nav-link" href="/api/logout">
							Logout
						</a>
					</li>
				);
		}
	}

	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark">
				<a className="navbar-brand" href="/">
					Fight The Mind
				</a>
				<ul className="navbar-nav ml-auto">
					<li className="nav-item active">
						<a className="nav-link" href="/doctors">
							Doctors
						</a>
					</li>
					<li className="nav-item active">
						<a className="nav-link" href="/posts">
							Share
						</a>
					</li>
					<li className="nav-item active">
						<a className="nav-link" href="/celebrities">
							Celebrities
						</a>
					</li>
					<li className="nav-item active">
						<a className="nav-link" href="/contact">
							Contact
						</a>
					</li>
					<li className="nav-item active">
						<a className="nav-link" href="/aboutUs">
							About Us
						</a>
					</li>
					<li className="nav-item active">{this.renderContent()}</li>
				</ul>
			</nav>
		);
	}
}
function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header);
