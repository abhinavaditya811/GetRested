const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
	url: {
		type: String,
	},
	actorName: {
		type: String,
	},
	description: {
		type: String,
	},
});

const celebrities = mongoose.model("celebrities", userSchema);

module.exports = celebrities;
