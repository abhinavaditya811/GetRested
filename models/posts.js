const mongoose = require("mongoose");

const { Schema } = mongoose;
const useRSchema = Schema({
	title: {
		type: String,
		required: true,
	},
	post: {
		type: String,
		required: true,
	},
	author: {
		type: String,
		required: true,
	},
});

const Posts = mongoose.model("posts", useRSchema);

module.exports = Posts;
