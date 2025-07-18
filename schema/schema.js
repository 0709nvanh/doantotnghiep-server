import { gql } from "apollo-server-express";

const typeDefs = gql`
	# QUERY
	type Book {
		id: ID!
		name: String
		image: String
		des: String
		slug: String
		quantity: Int
		price: Int
		author: Author
		genre: Genre
	}

	input BookInput {
		name: String
		genreId: String
		image: String
		des: String
		price: Int
		quantity: Int
		authorId: ID!
	}

	input BookQuantityInput {
		count: Int
	}

	input AuthorInput {
		name: String
		address: String
		age: Int
	}
	type Author {
		id: ID!
		name: String
		slug: String
		address: String
		age: String
		books: [Book]
	}
	type User {
		id: ID!
		name: String
		email: String
		password: String
		phone: String
		avatar: String
		role: Int
	}
	input UserInput {
		name: String
		email: String
		password: String
		phone: String
		avatar: String
		role: Int
	}
	input LoginInput {
		email: String!
		password: String!
	}
	input OrderInput {
		listOrder: String
		name: String
		email: String
		address: String
		phone: Int
		status: Int
	}

	type Order {
		id: ID!
		name: String
		listOrder: String
		email: String
		address: String
		phone: Int
		status: Int
		date: String
		comments: String
		rating: Int
	}

	type Comment {
		id: ID!
		user: User
		book: Book
		content: String
		icon: Int
	}

	input CommentInput {
		email: String
		content: String
		icon: Int
		bookId: String
	}

	input GenreInput {
		name: String
	}
	type Genre {
		id: ID!
		name: String
		slug: String
		books: [Book]
	}

	# ROOT TYPE : gốc của loại yêu cầu truy suất dữ liệu
	type Query {
		books: [Book]
		book(slug: String!): Book
		authors: [Author]
		author(slug: String!): Author
		users: [User]
		user(email: String!): User
		orders(email: String): [Order]
		order(id: ID!): Order
		comments(bookId: ID!): [Comment]
		comment: [Comment]
		genres: [Genre]
		genre(slug: String!): Genre
	}

	#MUTATION

	# TYPE: Thêm vào cơ sở dữ liệu
	type Mutation {
		createAuthor(input: AuthorInput): Author
		createGenre(input: GenreInput): Genre
		updateAuthor(id: ID!, input: AuthorInput): Author
		createBook(input: BookInput): Book
		updateBook(id: ID!, input: BookInput): Book
		updateQuantityBook(id: ID!, input: BookQuantityInput): Book
		deleteBook(id: ID!): Book
		deleteAuthor(id: ID!): Author
		deleteGenre(id: ID!): Genre
		createUser(input: UserInput): User
		createOrder(input: OrderInput): Order
		updateStatusOrder(id: ID!, status: Int): Order
		updateCommentStatus(id: ID!, icon: Int): Comment
		deleteComment(id: ID!): Comment
		deleteStatusOrder(id: ID!): Order
		danhGiaOrder(id: ID!, comments: String, danhgia: Int): Order
		login(email: String, name: String): User
		loginWithPassword(input: LoginInput): User
		createComment(input: CommentInput): Comment
		updateUser(id: ID!, input: UserInput): User
	}
`;

export default typeDefs;