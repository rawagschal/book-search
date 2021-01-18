const { gql } = require('apollo-server-express');

//create typeDefs
const typeDefs = gql `
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    # GQL JWT auth
    type Auth {
        token: ID!
        user: User
    }

    type Book {
        bookId: ID!
        authors: [String]
        description: String
        image: String
        link: String
        title: String
    }

    input BookInput {
        bookId: ID!
        authors: [String]
        description: String
        image: String
        link: String
        title: String
    }

    type Query {
        me: User
    }

    type Mutation {
        # login and addUser reference utils/Auth for JWT
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(bookData: BookInput!): User
        removeBook(bookId: ID!): User
    }
`;

//export typeDefs
module.exports = typeDefs;