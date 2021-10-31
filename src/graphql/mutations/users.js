import { UserInputError } from "apollo-server-express";
const models = require('../../../models/index');

export const createUser = async(_, { data }) => {
    const user = await models.User.create(data);

    return user;
};

export const updateUser = async(_, { id, data }) => {
    const user = await models.User.findByPk(id);

    if(!user) throw new UserInputError("Usuário não encontrado!");

    await user.update(data);
    return user;
}

export const deleteUser = async(_, { id }) => {
    const user = await models.User.findByPk(id);

    if(!user) throw new UserInputError("Usuário não encontrado!");

    await user.destroy();
    return user;
}