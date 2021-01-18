// This will hold the query GET_ME, which will execute the me query set up using Apollo Server.

const { gql } = require('apollo-server-express');

export const GET_ME = gql`
    {
        me {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                authors
                description
                image
                link
                title
            }
        }
    }

`;
