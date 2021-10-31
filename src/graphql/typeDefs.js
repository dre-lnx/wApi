const { gql } = require('apollo-server-express');

const typeDefs = gql`

    #types

    type User {
        id: ID!
        name: String!
        description: String!
        email: String!
        pwd: String!
    }

    type Status {
        id: ID!
        name: String!
    }

    type Board {
        id: ID!
        name: String!
        User : User!
    }

    #inputs

    input UserInput {
        name: String!
        description: String!
        email: String!
        pwd: String!
    }

    input StatusInput {
        name: String!
    }

    input BoardInput {
        name: String!
        userId: ID!
    }

    #queries

    type Query {

        #users
        getAllUsers: [User!]!
        getUserById(id: ID!): User

        #statuses
        getAllStatuses: [Status!]!
        getStatusById(id: ID!): Status

        #boards
        getAllBoards: [Board!]!
        getBoardById(id: ID!): Board
    }

    #mutations

`;

module.exports = {typeDefs};