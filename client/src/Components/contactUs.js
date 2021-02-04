import React, { Component } from "react";
import emailjs from "emailjs-com";

class contactUs extends Component {
	sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_q208qwz",
				"template_wpz9rye",
				e.target,
				"user_fG3EuIoJDA4dJruQFOliK"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	};
	render() {
		return (
			<div className="container">
				<form
					class="form"
					onSubmit={this.sendEmail}
					style={{
						width: "340px",
						height: "440px",
						borderRadius: "8px",
						boxShadow: "0 0 40px -10px #000",
						padding: "20px 30px",
						boxSizing: "border-box",
						marginLeft: "400px",
					}}
				>
					<h2
						style={{
							margin: "10px 0px",
							paddingBottom: "10px",
							borderBottom: "3px solid #78788c",
						}}
					>
						CONTACT US
					</h2>
					<p
						style={{
							display: "block",
							color: "#5a5a5a",
						}}
						type="Name:"
					>
						<input
							placeholder="Name"
							name="name"
							style={{
								width: "280px",
								padding: "10px",
								boxsizing: "border-box",
								borderColor: "black",
								background: "none",
								resize: "none",
								border: 0,
								fontfamily: "'Montserrat',sans-serif",
								transition: "all .3s",
								borderbottom: "2px solid #bebed2",
							}}
						></input>
					</p>
					<p type="Email:">
						<input
							placeholder="Email"
							name="email"
							style={{
								width: "280px",
								padding: "10px",
								boxsizing: "border-box",
								borderColor: "black",
								background: "none",
								resize: "none",
								border: 0,
								fontfamily: "'Montserrat',sans-serif",
								transition: "all .3s",
								borderbottom: "2px solid #bebed2",
							}}
						></input>
					</p>
					<textarea
						placeholder="Write to us"
						name="message"
						style={{
							width: "280px",
							padding: "10px",
							boxsizing: "border-box",
							borderColor: "black",
							background: "none",
							resize: "none",
							border: 0,
							fontfamily: "'Montserrat',sans-serif",
							transition: "all .3s",
							borderbottom: "2px solid #bebed2",
						}}
					/>
					<button className="btn btn-primary">Send Message</button>
					<div>
						<span
							class="fa fa-phone"
							style={{
								display: "flex",
								content: "Hi",
								position: "absolute",
								bottom: "129px",
								right: "585px",
								background: "#50505a",
								color: "#fff",
								width: "320px",
								padding: "16px 4px 16px 0",
								borderradius: "6px",

								boxShadow: "10px 10px 40px -14px #000",
								alignitems: "center",
								justifyContent: "center",
							}}
						>
							001 1023 567
						</span>
						<span
							class="fa fa-envelope-o"
							style={{
								display: "flex",
								content: "Hi",
								position: "absolute",
								bottom: "170px",
								right: "585px",
								background: "#50505a",
								color: "#fff",
								opacity: "90%",
								width: "320px",
								padding: "16px 4px 16px 0",
								borderradius: "6px",

								boxShadow: "10px 10px 40px -14px #000",
								alignitems: "center",
								justifyContent: "center",
							}}
						>
							{" "}
							contact@company.com
						</span>
					</div>
				</form>
			</div>
		);
	}
}
export default contactUs;
