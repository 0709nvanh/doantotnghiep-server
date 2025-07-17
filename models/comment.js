import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CommentSchema = new Schema(
	{
		email: {
			type: String,
		},
		bookId: {
			type: String,
		},
		content: {
			type: String,
		},
		icon: {
			type: Number,
		},
	},
	{
		collection: "comments",
		timestamps: true,
	},
);

export default mongoose.model("comments", CommentSchema);
