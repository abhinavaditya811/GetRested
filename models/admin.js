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
	adminUsername: {
		type: String,
	},
});

const admin = mongoose.model("Admin", userSchema);

module.exports = admin;
