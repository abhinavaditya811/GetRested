const passport = require("passport");

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

	try {
		app.get("/api/current_user", (req, res) => {
			res.send(req.user);
		});
	} catch (err) {
		console.log(err);
	}

	app.get("/api/logout", (req, res) => {
		req.logout();
		res.redirect("/");
	});
};
