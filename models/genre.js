import mongoose from "mongoose";
const Schema = mongoose.Schema;

const GenreSchema = new Schema(
	{
		name: {
			type: String,
		},
		slug: {
			type: String,
			lowercase: true,
		},
	},
	{
		collection: "genre",
		timestamps: true,
	},
);

export default mongoose.model("genre", GenreSchema);
