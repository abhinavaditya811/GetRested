import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";
import Doctors from "./Doctors/doctors";
import Posts from "./Forum/posts";
import Forum from "./Forum/forum";
import Celebrities from "./Celebrity/celebrities";
import editCelebrities from "./Celebrity/editCelebrities";
import addCelebrity from "./Celebrity/addCelebrity";
import AboutUs from "./aboutUs";
import Footer from "./footer";
import adminLogin from "./Login/adminLogin";
import adminRegister from "./Login/adminRegister";
import userLogin from "./Login/userLogin";
import userRegister from "./Login/userRegister";

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
						<Route exact path="/addCelebrity" component={addCelebrity} />
						<Route exact path="/forum" component={Forum} />
						<Route exact path="/editCelebrities" component={editCelebrities} />
						<Route exact path="/celebrities" component={Celebrities} />
						<Route exact path="/dashboard" component={Landing} />
						<Route exact path="/doctors" component={Doctors} />
						<Route exact path="/aboutUs" component={AboutUs} />
						<Route exact path="/contact" component={Contact} />
						<Route exact path="/posts" component={Posts} />
						<Route exact path="/adminLogin" component={adminLogin} />
						<Route exact path="/userLogin" component={userLogin} />
						<Route exact path="/userRegister" component={userRegister} />
						<Route exact path="/adminRegister" component={adminRegister} />
						<Footer />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(null, actions)(App);
