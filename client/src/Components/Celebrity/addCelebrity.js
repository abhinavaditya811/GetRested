import React, { Component } from "react";
import axios from "axios";

class addCelebrity extends Component {
	constructor(props) {
		super(props);
		this.state = {
			url: "",
			actorName: "",
			description: "",
		};
	}

	handleUrl = (e) => {
		this.setState({ url: e.target.value });
	};

	handleactorName = (e) => {
		this.setState({ actorName: e.target.value });
	};

	handleDescription = (e) => {
		this.setState({ description: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const details = {
			url: this.state.url,
			actorName: this.state.actorName,
			description: this.state.description,
		};
		console.log(details);
		axios
			.post("http://localhost:5000/addCelebrity", details)
			.then((res) => console.log(res.data))
			.then(() => {
				window.location.href = "/editCelebrities";
			});
	};

	render() {
		return (
			<div>
				<div className="col-12 col-lg-6 offset-lg-3">
					<h1
						className="header col-12 col-lg-12"
						style={{ marginLeft: "9rem", marginTop: "3rem" }}
					>
						Add Celebrity
					</h1>
					<form action="/posts" method="post" onSubmit={this.handleSubmit}>
						<input
							className="form-control my-3"
							placeholder="url"
							type="text"
							onChange={this.handleUrl}
						/>
						<input
							className="form-control my-3"
							placeholder="Name of Actor"
							type="text"
							onChange={this.handleactorName}
						/>
						<textarea
							className="form-control my-3"
							placeholder="Description"
							type="text"
							style={{ height: "100px" }}
							onChange={this.handleDescription}
						/>
						<button className="btn btn-primary float-right" name="button">
							Submit
						</button>
					</form>
				</div>
				<img
					src="http://images.ctfassets.net/v3n26e09qg2r/2iRIlCy9uVqGkcO275gYPP/57fdf0c6c0e07399f62b9eab0b347873/HS_COM_desktop-sun.svg"
					alt="..."
					style={{ maxHeight: "39%", maxWidth: "39.85%", marginLeft: "30rem" }}
				/>
			</div>
		);
	}
}

export default addCelebrity;
