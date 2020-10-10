import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";
import AboutUs from "./aboutUs";
import Footer from "./footer";
import Forum from "./forum";
const Celebrity = () => <h2>Celebrity</h2>;
const Doctors = () => <h2>Doctors</h2>;
const Contact = () => <h2>Contact</h2>;

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
						<Header />
						<Route exact path="/" component={Landing} />
						<Route exact path="/forum" component={Forum} />
						<Route exact path="/celebrity" component={Celebrity} />
						<Route exact path="/dashboard" component={Landing} />
						<Route exact path="/doctors" component={Doctors} />
						<Route exact path="/aboutUs" component={AboutUs} />
						<Route exact path="/contactUs" component={Contact} />
						<Footer />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(null, actions)(App);
