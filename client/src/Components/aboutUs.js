import React, { Component } from "react";

class AboutUs extends Component {
	render() {
		return (
			<div>
				<div className="container">
					<section className="section" id="about">
						<h1
							className="text-center bg-primary"
							style={{ color: "lavenderblush" }}
						>
							About Us
						</h1>
						<div className="section-content container">
							<div className="row text-center text-lg-left">
								<div className="col-12 col-lg-6 mb-12 mb-lg-0 d-flex align-items-center bg-dark-90">
									<div className="pr-0 pr-lg-10">
										<h2 className="mb-0">Welcome</h2>
										<p className="mt-8 mb-11">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Pellentesque blandit, odio sit amet ornare pharetra, enim
											lorem auctor neque, lacinia pulvinar dolor massa et ante.
											Sed placerat, velit a tincidunt consectetur, ligula justo
											consectetur mauris, quis egestas tellus dolor quis tellus.
											Aliquam feugiat in elit et imperdiet.
										</p>
									</div>
								</div>
								<div className="col-12 col-lg-6">
									<img src="https://demo.htmlhunters.com/profi/assets/images/image-2.jpg" />
								</div>
							</div>
						</div>
					</section>
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
						src="https://images.unsplash.com/photo-1598707499945-65c28c1d71a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
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
					/>
				</div>
				<section className="section bg-primary text-white pb-x1-0 pt-21">
					<div className="section-content container">
						<div className="row">
							<div className="col-12 col-xl-12 text-center text-xl-center">
								<h1 className="fs-8 fs-md-9 fs-x1-10">The Team</h1>
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
							</div>
						</div>
					</div>
				</section>
				<section
					className="hero hero-fullscreen hero-bg-white hero-bg-ready"
					style={{ minHeight: "661.2px" }}
				>
					<div className="hero-background hero-background-stick-right hero-background-70-percent">
						<img src="https://scontent.fdel3-1.fna.fbcdn.net/v/t1.0-9/12794478_565230926979759_3161330248919966678_n.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=tCA4-flclPcAX890UC0&_nc_ht=scontent.fdel3-1.fna&oh=e7cf6934818d658873ac00731ae6086c&oe=5FA3450D" />
					</div>
					<div className="hero-foreground d-flex flex-column justify-content-center">
						<div className="container d-flex align-items-center justify-content-center justify-content-lg-start py-14 py-md-23 py-lg-25">
							<div
								className="card border-0 text-center text-lg-left"
								style={{ maxWidth: "595px" }}
							>
								<div className="card-body text-body p-19 pl-lg-0 pr-lg-20 py-lg-20">
									<h1 className="text-black fs-6 fs-md-9 fs-lg-11 lh-lg-13 mb-10">
										Abhinav Aditya
									</h1>
									<p className="fs-4 fs-md-5 mb-10">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Pellentesque blandit, odio sit amet ornare pharetra, enim
										lorem auctor neque, lacinia pulvinar dolor massa et ante.
										Sed placerat, velit a tincidunt consectetur, ligula justo
										consectetur mauris, quis egestas tellus dolor quis tellus.
										Aliquam feugiat in elit et imperdiet. Cras sit amet orci
										cursus, aliquam justo ultrices, elementum ante. In tempor,
										nisl ac euismod dignissim, elit nibh bibendum libero, nec
										pulvinar ligula justo non justo. Aenean sagittis vulputate
										neque a aliquet. Nunc congue neque suscipit consectetur
										semper. Aliquam sit amet metus id ipsum accumsan efficitur
										luctus eu dui.Cras sit amet orci cursus, aliquam justo
										ultrices, elementum ante.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section
					className="hero hero-fullscreen hero-bg-white hero-bg-ready"
					style={{ minHeight: "661.2px" }}
				>
					<div className="hero-background hero-background-stick-right hero-background-70-percent">
						<img src="https://scontent.fdel3-1.fna.fbcdn.net/v/t1.15752-0/p280x280/121058974_638834206822400_356542015927672627_n.jpg?_nc_cat=104&_nc_sid=ae9488&_nc_ohc=ejbLzaOKL8oAX_5hfcT&_nc_ht=scontent.fdel3-1.fna&tp=6&oh=cfaee7e2b5dcec8b23673f754504aa7b&oe=5FA24A42" />
					</div>
					<div className="hero-foreground d-flex flex-column justify-content-center">
						<div className="container d-flex align-items-center justify-content-center justify-content-lg-start py-14 py-md-23 py-lg-25">
							<div
								className="card border-0 text-center text-lg-left"
								style={{ maxWidth: "595px" }}
							>
								<div className="card-body text-body p-19 pl-lg-0 pr-lg-20 py-lg-20">
									<h1 className="text-black fs-6 fs-md-9 fs-lg-11 lh-lg-13 mb-10">
										Annvii Kumar
									</h1>
									<p className="fs-4 fs-md-5 mb-10">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Pellentesque blandit, odio sit amet ornare pharetra, enim
										lorem auctor neque, lacinia pulvinar dolor massa et ante.
										Sed placerat, velit a tincidunt consectetur, ligula justo
										consectetur mauris, quis egestas tellus dolor quis tellus.
										Aliquam feugiat in elit et imperdiet. Cras sit amet orci
										cursus, aliquam justo ultrices, elementum ante. In tempor,
										nisl ac euismod dignissim, elit nibh bibendum libero, nec
										pulvinar ligula justo non justo. Aenean sagittis vulputate
										neque a aliquet. Nunc congue neque suscipit consectetur
										semper. Aliquam sit amet metus id ipsum accumsan efficitur
										luctus eu dui.Cras sit amet orci cursus, aliquam justo
										ultrices, elementum ante.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default AboutUs;
