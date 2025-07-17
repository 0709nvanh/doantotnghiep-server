/**
 * Create by DungTmc on 16/09/2021
 */

import mongoose from "mongoose";

const db = {
	connect: async () => {
		try {
			await mongoose.connect("mongodb+srv://anhnv:dung0401@sky-book.ua98syz.mongodb.net/?appName=sky-book", {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			});
			console.log("MongoDB connected");
		} catch (error) {
			console.error("MongoDB connection error:", error);
			process.exit(1);
		}
	},
};

export default db;
