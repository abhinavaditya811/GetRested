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
				<section
					className="section bg-primary text-white pb-x1-0 pt-21"
					style={{ opacity: "80%" }}
				>
					<div className="section-content container">
						<div className="row">
							<div className="col-12 col-xl-12 text-center text-xl-center">
								<h1 className="fs-8 fs-md-9 fs-x1-10">The Purpose</h1>
								<small className="fs-1 1h-1 font-family-secondary text-uppercase font-weight-bold letter-spacing-caption text-muted">
									YOU ARE NOT ALONE IN THIS FIGHT
								</small>
								<p
									className="container fs-4 fs-md-5 mb-10 mx-auto"
									styles="max-width: 530px"
								>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Pellentesque blandit, odio sit amet ornare pharetra, enim
									lorem auctor neque, lacinia pulvinar dolor massa et ante. Sed
									placerat, velit a tincidunt consectetur, ligula justo
									consectetur mauris, quis egestas tellus dolor quis tellus.
									Aliquam feugiat in elit et imperdiet. Cras sit amet orci
									cursus, aliquam justo ultrices, elementum ante. In tempor,
									nisl ac euismod dignissim, elit nibh bibendum libero, nec
									pulvinar ligula justo non justo. Aenean sagittis vulputate
									neque a aliquet. Nunc congue neque suscipit consectetur
									semper. Aliquam sit amet metus id ipsum accumsan efficitur
									luctus eu dui.Cras sit amet orci cursus, aliquam justo
									ultrices, elementum ante. In tempor, nisl ac euismod
									dignissim, elit nibh bibendum libero, nec pulvinar ligula
									justo non justo. Aenean sagittis vulputate neque a aliquet.
									Nunc congue neque suscipit consectetur semper. Aliquam sit
									amet metus id ipsum accumsan efficitur luctus eu dui.
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Posts;
