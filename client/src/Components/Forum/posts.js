import React, { Component } from "react";

class Posts extends Component {
	render() {
		return (
			<div
				className="container"
				style={{ paddingTop: "1rem", marginTop: ".5rem" }}
			>
				<h1
					className="header col-12 col-lg-12"
					style={{ paddingLeft: "19rem", marginTop: "3rem" }}
				>
					Everyone has a story to share
				</h1>
				<input
					className="form-control my-3"
					placeholder="Share your story"
					name="postTitle"
					type="text"
					onClick={() => {
						window.location.href = "/forum";
					}}
				/>
			</div>
		);
	}
}

export default Posts;
