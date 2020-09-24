import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
const Celebrity = () => <h2>Celebrity</h2>;
const Forum = () => <h2>Forum</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<div>
					<Header />
					<Route exact path="/" component={Landing} />
					<Route exact path="/forum" component={Forum} />
					<Route exact path="/celebrity" component={Celebrity} />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
