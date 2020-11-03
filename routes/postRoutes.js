let Posts = require("../models/posts");

module.exports = (app) => {
	app.post("/forum", (req, res) => {
		const title = req.body.title;
		const post = req.body.post;
		const author = req.body.author;

		const newPost = new Posts({
			title,
			post,
			author,
		});

		newPost
			.save()
			.then(() => res.json("Story posted"))
			.catch((err) => {
				console.log(err);
			});
	});
};
