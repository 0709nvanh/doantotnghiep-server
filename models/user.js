const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
			minlength: 2,
			maxlength: 50,
		},
		password: {
			type: String,
			required: true,
			minlength: 6,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			lowercase: true,
		},
		avatar: {
			type: String,
			default: "https://cdn-icons-png.flaticon.com/512/219/219983.png",
		},
		role: {
			type: Number,
			default: 0,
		},
	},
	{
		collection: "users",
		timestamps: true,
	},
);

module.exports = mongoose.model("users", UserSchema);
