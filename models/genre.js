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
		collection: "genres",
		timestamps: true,
	},
);

export default mongoose.model("genres", GenreSchema);
