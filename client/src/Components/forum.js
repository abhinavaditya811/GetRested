import React from "react";

function yourPost() {
	return (
		<div>
			<div className="col-12 col-lg-6 offset-lg-3">
				<h1
					className="header col-12 col-lg-12"
					style={{ marginLeft: "9rem", marginTop: "3rem" }}
				>
					Share your Experience!
				</h1>
				<input className="form-control my-3" placeholder="Title" />
				<textarea
					className="form-control my-3"
					placeholder="Your Story"
				></textarea>
				<button className="btn btn-primary float-right">Submit</button>
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
						src="http://images.ctfassets.net/v3n26e09qg2r/2iRIlCy9uVqGkcO275gYPP/57fdf0c6c0e07399f62b9eab0b347873/HS_COM_desktop-sun.svg"
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
			</div>
		</div>
	);
}

export default yourPost;
