import { UserInputError } from "apollo-server-express";
const models = require('../../../models/index');

export const getAllUsers = async() => {
    const users = await models.User.findAll();

    return users;
};

export const getUserById = async(_, { id }) => {
    const user = await models.User.findByPk(id);

    if (!user) throw new UserInputError("Usuário não encontrado!");

    return user;
};