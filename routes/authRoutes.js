const passport = require("passport");
let customUsers = require("../models/customUsers");
let admin = require("../models/admin");

module.exports = (app) => {
	app.get(
		"/auth/google",
		passport.authenticate("google", {
			scope: ["profile", "email"],
		})
	);

	app.get(
		"/auth/google/callback",
		passport.authenticate("google"),
		(req, res) => {
			res.redirect("/dashboard");
		}
	);

	app.get("/api/current_user", (req, res) => {
		res.send(req.user);
	});

	app.get("/api/logout", (req, res) => {
		req.logout();
		res.redirect("/");
	});

	app.post("/userRegister", (req, res) => {
		const username = req.body.username;
		const email = req.body.email;
		const password = req.body.password;
		const firstName = req.body.firstName;
		const lastName = req.body.lastName;

		const newUser = new customUsers({
			username,
			email,
			password,
			firstName,
			lastName,
		});

		newUser
			.save()
			.then(() => res.json("Custom User Added"))
			.catch((err) => {
				console.log(err);
			});
	});

	app.post("/adminRegister", (req, res) => {
		const username = req.body.username;
		const email = req.body.email;
		const password = req.body.password;
		const firstName = req.body.firstName;
		const lastName = req.body.lastName;
		const adminUsername = req.body.adminUsername;

		admin
			.find({ adminUsername: username })
			.then((existingUser) => {
				if (existingUser) {
					const newUser = new admin({
						username,
						email,
						password,
						firstName,
						lastName,
						adminUsername,
					});

					newUser
						.save()
						.then(() => res.json("Admin Added"))
						.catch((err) => {
							console.log(err);
						});
				} else {
					res.redirect("/errorPage");
				}
			})
			.catch((err) => console.log(err));
	});

	app.get("/customLogin", (req, res) => {
		customUsers.findOne({ username: username }).then(console.log("User Found"));
	});

	app.post("/userLogin", (req, res) => {
		const username = req.body.username;
		const password = req.body.password;

		customUsers.findOne({ username: username }).then(console.log("User Found"));
	});
};
