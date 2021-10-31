import { UserInputError } from "apollo-server-express";
const models = require('../../../models/index');

export const createTask = async(_, { data }) => {
    const task = await models.Task.create(data);

    return task;
};

export const updateTask = async(_, { id, data }) => {
    const task = await models.Task.findByPk(id);

    if(!task) throw new UserInputError("Usuário não encontrado!");

    await task.update(data);
    return task;
}

export const deleteTask = async(_, { id }) => {
    const task = await models.Task.findByPk(id);

    if(!task) throw new UserInputError("Usuário não encontrado!");

    await task.destroy();
    return task;
}