let Posts = require("../models/posts");
const celebrities = require("../models/celebrities");

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

	app.get("/posts", (req, res) => {
		Posts.find()
			.then((post) => {
				res.json(post);
			})
			.catch((err) => {
				console.log(err);
			});
	});

	app.post("/addCelebrity", (req, res) => {
		const url = req.body.url;
		const actorName = req.body.actorName;
		const description = req.body.description;
		const newPost = new celebrities({
			url,
			actorName,
			description,
		});

		newPost
			.save()
			.then(() => res.json("Story posted"))
			.catch((err) => {
				console.log(err);
			});
	});

	app.get("/celebrities", (req, res) => {
		celebrities
			.find()
			.then((post) => {
				res.json(post);
			})
			.catch((err) => {
				console.log(err);
			});
	});
};
