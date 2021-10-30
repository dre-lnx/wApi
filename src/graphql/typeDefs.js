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

    #queries

    type Query {
        getAllUsers: [User!]!
    }

    #mutations

`;

module.exports = {typeDefs};