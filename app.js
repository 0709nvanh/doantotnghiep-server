import express from "express";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import morgan from "morgan";
// load schema & resolvers
import "reflect-metadata";
import dotenv from "dotenv";
import typeDefs from "./schema/schema.js";
import resolvers from "./resolver/resolver.js";

// load db methods

import mongooseDataMethods from "./data/db.js";

// connect mongose db
import db from "./connectDb.js";
db.connect();
const server = new ApolloServer({
	typeDefs,
	resolvers,
});
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

async function startServer() {
	const apolloServer = new ApolloServer({
		typeDefs,
		resolvers,
		context: () => ({ mongooseDataMethods }),
	});
	await apolloServer.start();
	apolloServer.applyMiddleware({ app });
}
startServer();

const port = 9000;

app.listen({ port }, () => {
	console.log(
		`Server listening on http://localhost:${port}${server.graphqlPath}`,
	);
});
