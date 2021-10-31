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

    #inputs

    input UserInput {
        name: String!
        description: String!
        email: String!
        pwd: String!
    }

    #queries

    type Query {
        getAllUsers: [User!]!
        getUserById(id: ID!): User
    }

    #mutations

`;

module.exports = {typeDefs};