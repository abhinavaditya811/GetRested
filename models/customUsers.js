const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
	username: {
		type: String,
	},
	email: {
		type: String,
	},
	password: {
		type: String,
	},
	firstName: {
		type: String,
	},
	lastName: {
		type: String,
	},
});

const customUsers = mongoose.model("customUsers", userSchema);

module.exports = customUsers;
