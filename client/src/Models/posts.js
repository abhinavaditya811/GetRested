import mongoose from "mongoose";

const { Schema } = mongoose;
const useRSchema = Schema({
	firstName: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	post: {
		type: String,
		required: true,
	},
});
