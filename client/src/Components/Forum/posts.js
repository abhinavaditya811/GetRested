import React, { Component } from "react";
import axios from "axios";

const Post = (props) => (
	<div className="container">
		<div className="d-flex align-items-center justify-content-center py-18 py-md-23 py-lg-25">
			<div className="card border-0 text-center mx-15 mx-lg-0 bg-dark-90">
				<div className="card-body text-body p-10 p-lg-22">
					<h1 className="text-black fs-6 fs-md-9 fs-lg-11 lh-lg-12 mb-10">
						{props.post.title}
					</h1>
					<p
						className="container fs-4 fs-md-5 mb-10 mx-auto"
						style={{ fontSize: "19px" }}
					>
						{props.post.post}
					</p>
				</div>
			</div>
		</div>
	</div>
);

class Posts extends Component {
	constructor(props) {
		super(props);
		this.state = { posts: [] };
	}
	componentDidMount() {
		axios
			.get("http://localhost:5000/posts")
			.then((res) => {
				this.setState({ posts: res.data });
			})
			.catch((err) => {
				console.log(err);
			});
	}

	posts() {
		return this.state.posts.map((currentPost) => {
			return <Post post={currentPost} key={currentPost._id} />;
		});
	}

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
				<p>{this.posts()}</p>
			</div>
		);
	}
}

export default Posts;
