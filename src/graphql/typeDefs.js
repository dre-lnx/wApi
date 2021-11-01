const { gql } = require('apollo-server-express');

const typeDefs = gql`

    #types

    interface Login {
        email: String!
        pwd: String!
    }

    type Authentication {
        token: String!
    }

    type Authenticate {
        token: String!
        user: User!
    }

    type User implements Login{
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
        User: User!
    }

    type Task {
        id: ID!
        name: String!
        description: String!
        Status: Status!
        Board: Board!
        User: User!
    }

    #inputs

    input LoginInput {
        email: String!
        pwd: String!
    }

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

    input TaskInput {
        name: String!
        description: String!
        statusId: ID!
        boardId: ID!
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

        #tasks
        getAllTasks: [Task!]!
        getTaskById(id: ID!): Task
    }

    #mutations

    type Mutation {

        logIn(data: LoginInput): Authenticate!

        #users
        createUser(data: UserInput): User!
        updateUser(id: ID!, data: UserInput): User!
        deleteUser(id: ID!): User!

        #status
        createStatus(data: StatusInput): Status!
        updateStatus(id: ID!, data: StatusInput): Status!

        #boards
        createBoard(data: BoardInput): Board!
        updateBoard(id: ID!, data: BoardInput): Board!
        deleteBoard(id: ID!): Board!

        #tasks
        createTask(data: TaskInput): Task!
        updateTask(id: ID!, data: TaskInput): Task!
        deleteTask(id: ID!): Task!

    }

`;

module.exports = {typeDefs};