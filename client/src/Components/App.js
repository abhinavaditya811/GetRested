import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";
import Doctors from "./Doctors/doctors";
import Posts from "./Forum/posts";
import Forum from "./Forum/forum";
import Celebrities from "./celebrities";
import AboutUs from "./aboutUs";
import Footer from "./footer";
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
						<Route exact path="/celebrities" component={Celebrities} />
						<Route exact path="/dashboard" component={Landing} />
						<Route exact path="/doctors" component={Doctors} />
						<Route exact path="/aboutUs" component={AboutUs} />
						<Route exact path="/contact" component={Contact} />
						<Route exact path="/posts" component={Posts} />
						<Footer />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(null, actions)(App);
