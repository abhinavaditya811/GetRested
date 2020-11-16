import React, { Component } from "react";
import axios from "axios";
const Celebrity = (props) => (
	<div className="col-6 col-md-6 d-flex" style={{ marginBottom: "3rem" }}>
		<div className="celebrity-card">
			<img
				className="img-class-top"
				src={props.celebrity.url}
				alt="doc1"
				style={{
					maxHeight: "40%",
					maxWidth: "43%",
					padding: "2rem",
					transform: "scale(1.1)",
					transition: "0.7s",
				}}
			/>
			<div className="card-body py-3" style={{ margin: "1rem" }}>
				<h1 className="mb-0">{props.celebrity.actorName}</h1>
			</div>
			<div className="card-footer pt-0 border-top-0">
				<p>{props.celebrity.description}</p>
			</div>
		</div>
	</div>
);

class editCelebrities extends Component {
	handleCelebrities = () => {
		window.location.href = "/addCelebrity";
	};

	constructor(props) {
		super(props);
		this.state = { celebrities: [] };
	}
	componentDidMount() {
		axios
			.get("http://localhost:5000/celebrities")
			.then((res) => {
				this.setState({ celebrities: res.data });
			})
			.catch((err) => {
				console.log(err);
			});
	}

	showCelebrities() {
		return this.state.celebrities.map((currentCelebrity) => {
			return (
				<Celebrity celebrity={currentCelebrity} key={currentCelebrity._id} />
			);
		});
	}
	render() {
		return (
			<section
				className="container"
				style={{ paddingTop: "1rem", marginTop: "1rem" }}
			>
				<h1 className="page-title">
					Celebrities who've talked about mental illnesses.
				</h1>
				<button
					type="button"
					class="btn btn-secondary"
					data-toggle="tooltip"
					data-placement="top"
					title="Add more celebrities"
					onClick={this.handleCelebrities}
				>
					Add more celebrities
				</button>
				<button
					type="button"
					class="btn btn-secondary"
					data-toggle="tooltip"
					data-placement="top"
					title="Edit info"
				>
					Edit info
				</button>

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
						src="https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
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

				<div className="row mb-4">
					<div>{this.showCelebrities()}</div>
				</div>
			</section>
		);
	}
}

export default editCelebrities;
