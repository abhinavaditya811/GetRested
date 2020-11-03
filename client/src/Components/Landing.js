import React, { Component } from "react";

class Landing extends Component {
	render() {
		return (
			<div>
				<div className="container" style={{ paddingTop: "0.5rem" }}>
					<div className="d-flex align-items-center justify-content-center py-18 py-md-23 py-lg-25">
						<div className="card border-0 text-center mx-15 mx-lg-0 bg-dark-90">
							<div className="card-body text-body p-10 p-lg-22">
								<h1
									className="text-black fs-6 fs-md-9 fs-lg-11 lh-lg-12 mb-10"
									style={{ marginBottom: "1px" }}
								>
									Fight The Mind
								</h1>
								<p
									className="container fs-4 fs-md-5 mb-10 mx-auto"
									style={{ fontSize: "19px" }}
								>
									It was the World Health Organisation which estimated that one
									in seven Indians suffered from poor mental health and labeled
									the country the most depressing country in the world. The
									President of India, Ram Nath Kovind, echoed the view in
									December 2017 and warned the country that a mental health
									epidemic was round the corner.
									<br />
									<br />
									Fight the mind is an all in one mental health service portal
									for fighting the challenges that India faces related to mental
									health issues. We aim at providing a web portal that caters to
									all the needs of people facing mental health disorders or
									issues like anxiety, depression, stress, etc. It aims towards
									providing a concrete solution for the issue of mental health
									at the grass-root level.
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
					style={{ opacity: "90%" }}
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
									style={{ fontSize: "19px" }}
								>
									Through this portal, we wish to provide a platform where we
									have different pages designed in order to help people find
									solutions for their mental illness from the comfort of their
									homes. Our main purposes include
									<br />
									<br /> -Helping people find psychologists online
									<br /> -Inspiring them to open up about the mental illness
									<br /> -Reaching out to people who have battled mental health
									issues
									<br /> -24x7 helpline
								</p>
							</div>
						</div>
					</div>
				</section>
				<div className="container">
					<div className="d-flex align-items-center justify-content-center py-18 py-md-23 py-lg-25">
						<div className="card border-0 text-center mx-15 mx-lg-0 bg-dark-90">
							<div className="card-body text-body p-10 p-lg-22">
								<h1 className="text-black fs-6 fs-md-9 fs-lg-11 lh-lg-12 mb-10">
									Connect with other poeple
								</h1>
								<p
									className="container fs-4 fs-md-5 mb-10 mx-auto"
									style={{ fontSize: "19px" }}
								>
									This is a platform where all the people who have battled
									mental illness can share their experiences and this also gives
									the people currently facing mental health issues the chance to
									interact with these people as well as ask questions concerning
									their problems. This platform gives all the people facing
									mental health issues the power of “anonymity” so that everyone
									can share their problems without the fear of being judged by
									others.
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
					style={{ opacity: "90%" }}
				>
					<div className="section-content container">
						<div className="row">
							<div className="col-12 col-xl-12 text-center text-xl-center">
								<h1 className="fs-8 fs-md-9 fs-x1-10">About Us</h1>
								<small className="fs-1 1h-1 font-family-secondary text-uppercase font-weight-bold letter-spacing-caption text-muted"></small>
								<p
									className="container fs-4 fs-md-5 mb-10 mx-auto"
									style={{ fontSize: "19px" }}
								>
									We are a group of Computer Science enthusiasts from Manipal
									University Jaipur working towards one of the major stigmas
									that the Indian society faces in today’s time i.e. the taboo
									of mental health. Want to know more about us?
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
