import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";
import AboutUs from "./aboutUs";
import userLogin from "./Login/userLogin";
import userRegister from "./Login/userRegister";
import contactUs from "./contactUs";
import Services from "./services";

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
						<Route exact path="/service" component={Services} />

						<Route exact path="/dashboard" component={Landing} />

						<Route exact path="/aboutUs" component={AboutUs} />
						<Route exact path="/contact" component={contactUs} />

						<Route exact path="/userLogin" component={userLogin} />
						<Route exact path="/userRegister" component={userRegister} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(null, actions)(App);
