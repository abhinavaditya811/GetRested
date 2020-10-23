import React, { Component } from "react";

class Landing extends Component {
	render() {
		return (
			<div>
				<div className="container">
					<p id="welcome-message"></p>
					<div className="d-flex align-items-center justify-content-center py-18 py-md-23 py-lg-25">
						<div
							className="card border-0 text-center mx-15 mx-lg-0 bg-dark-90"
							styles="max-width: 770px"
						>
							<div className="card-body text-body p-10 p-lg-22">
								<h1 className="text-black fs-6 fs-md-9 fs-lg-11 lh-lg-12 mb-10">
									Fight The Mind
								</h1>
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
									luctus eu dui.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div
					id="jarallax-container-0"
					style={{
						position: "absolute",
						top: "0px",
						left: "0px",
						width: "100%",
						height: "100%",
						overflow: "hidden",
						zIndex: "-100",
					}}
				>
					<img
						src="https://teenmentalhealth.org/wp-content/uploads/2014/04/booth-graphics-for-bg.jpg"
						className="jarallax-img"
						style={{
							objectFit: "cover",
							objectPosition: "50% 50%",
							maxWidth: "none",
							position: "fixed",
							top: "0px",
							left: "0px",
							width: "1680px",
							height: "740.8px",
							overflow: "hidden",
							pointerEvents: "none",
							transformStyle: "preserve-3d",
							backfaceVisibility: "hidden",
							willChange: "transform, opacity",
							marginTop: "auto",
							transform: "translate3d(0px, 17.96px, 0px)",
						}}
						alt="..."
					/>
				</div>
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
				<div className="container">
					<div className="d-flex align-items-center justify-content-center py-18 py-md-23 py-lg-25">
						<div
							className="card border-0 text-center mx-15 mx-lg-0 bg-dark-90"
							styles="max-width: 770px"
						>
							<div className="card-body text-body p-10 p-lg-22">
								<h1 className="text-black fs-6 fs-md-9 fs-lg-11 lh-lg-12 mb-10">
									Connect to other poeple
								</h1>
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
									luctus eu dui.
								</p>
								<a href="/posts" className="btn btn-lg btn-primary">
									The Forum
								</a>
							</div>
						</div>
					</div>
				</div>

				<section
					className="section bg-primary text-white pb-x1-0 pt-21"
					style={{ opacity: "80%" }}
				>
					<div className="section-content container">
						<div className="row">
							<div className="col-12 col-xl-12 text-center text-xl-center">
								<h1 className="fs-8 fs-md-9 fs-x1-10">About Us</h1>
								<small className="fs-1 1h-1 font-family-secondary text-uppercase font-weight-bold letter-spacing-caption text-muted"></small>
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
									amet metus id ipsum accumsan efficitur luctus eu dui. Want to
									know more about us?
								</p>
								<a href="/aboutUs" className="btn btn-lg btn-dark">
									Read More
								</a>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Landing;
