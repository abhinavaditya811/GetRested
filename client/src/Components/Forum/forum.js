import React, { Component } from "react";
import axios from "axios";

class yourPost extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			post: "",
			author: "",
			id: "",
		};
	}

	handleTitle = (e) => {
		this.setState({ title: e.target.value });
	};

	handlePost = (e) => {
		this.setState({ post: e.target.value });
	};

	handleAuthor = (e) => {
		this.setState({ author: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const details = {
			title: this.state.title,
			post: this.state.post,
			author: this.state.author,
		};
		console.log(details);
		axios
			.post("http://localhost:5000/forum", details)
			.then((res) => console.log(res));
	};

	render() {
		return (
			<div>
				<div className="col-12 col-lg-6 offset-lg-3">
					<h1
						className="header col-12 col-lg-12"
						style={{ marginLeft: "9rem", marginTop: "3rem" }}
					>
						What's on your mind?
					</h1>
					<form action="/posts" method="post" onSubmit={this.handleSubmit}>
						<input
							className="form-control my-3"
							placeholder="Title"
							name="postTitle"
							type="text"
							onChange={this.handleTitle}
						/>
						<textarea
							className="form-control my-3"
							placeholder="Story"
							name="postContent"
							style={{ height: "100px" }}
							onChange={this.handlePost}
						/>
						<input
							className="form-control my-3"
							placeholder="Author"
							name="postAuthor"
							type="text"
							onChange={this.handleAuthor}
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

export default yourPost;
