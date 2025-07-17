import mongoose from "mongoose";
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
	{
		name: {
			type: String,
		},
		email: {
			type: String,
		},
		phone: {
			type: Number,
		},
		address: {
			type: String,
		},
		listOrder: {
			type: String,
		},
		date: {
			type: String,
			default: new Date().toISOString().slice(0, 10),
		},
		status: {
			type: Number,
		},
		rating: {
			type: Number,
			default: 0,
		},
		comments: {
			type: String,
		},
	},
	{
		collection: "orders",
		timestamps: true,
	},
);

export default mongoose.model("orders", OrderSchema);
