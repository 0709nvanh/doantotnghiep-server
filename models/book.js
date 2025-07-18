import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BookSchema = new Schema(
	{
		name: {
			type: String,
		},
		slug: {
			type: String,
			lowercase: true,
		},
		genreId: {
			type: String,
		},
		image: {
			type: String,
			default: "https://i.imgur.com/NVRNzyf.jpg",
		},
		price: {
			type: Number,
		},
		des: {
			type: String,
		},
		quantity: {
			type: Number,
			default: 0,
		},
		authorId: {
			type: String,
		},
	},
	{
		collection: "books",
		timestamps: true,
	},
);

export default mongoose.model("books", BookSchema);
