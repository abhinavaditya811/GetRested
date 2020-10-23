import React, { Component } from "react";

class yourPost extends Component {
	state = {
		title: "NULL",
		post: "",
	};

	handleTitle = (e) => {
		this.setState({ title: e.target.value });
		console.log(this.state.title);
		console.log("Here 1");
	};

	handlePost = (e) => {
		this.setState({ post: e.target.value });
		console.log(this.state.post);
		console.log("Here 2");
	};

	handleSubmit = () => {
		console.log("here1");
		console.log(this.state.title);
		console.log(this.state.post);
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
					<form onSubmit={this.handleSubmit}>
						<input
							className="form-control my-3"
							placeholder="Title"
							name="postTitle"
							type="text"
							onChange={this.handleTitle}
						/>
						<textarea
							className="form-control my-3"
							placeholder="Your Story"
							name="postContent"
							style={{ height: "100px" }}
							onChange={this.handlePost}
						></textarea>
						<button
							className="btn btn-primary float-right"
							type="submit"
							name="button"
						>
							Submit
						</button>
					</form>
				</div>
				<img
					src="http://images.ctfassets.net/v3n26e09qg2r/2iRIlCy9uVqGkcO275gYPP/57fdf0c6c0e07399f62b9eab0b347873/HS_COM_desktop-sun.svg"
					alt="..."
					style={{ maxHeight: "60%", maxWidth: "60%", marginLeft: "17rem" }}
				/>
			</div>
		);
	}
}

export default yourPost;
