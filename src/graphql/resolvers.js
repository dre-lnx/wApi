import { UserInputError } from "apollo-server-express";
const models = require('../../models/index.js');

const getAllUsers = async() => {
    const users = await models.User.findAll();

    if(!users) { return console.log("empty") };

    console.log(users);

    return users;
}

const getUserById = async(_, { id }) => {
    console.log(id);
    const user = await models.User.findByPk(id);

    if (!user) throw new UserInputError("Usuário não encontrado!");

    console.log(user);

    return user;
}

const resolvers = {
    Query: {
        getAllUsers() {
            return getAllUsers()
        },
        getUserById(_,{id}) {
            return getUserById(_, {id});
        }
    },
};

module.exports = {resolvers};