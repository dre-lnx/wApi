import { UserInputError } from "apollo-server-express";
const models = require('../../../models/index');

export const getAllTasks = async() => {
    const tasks = await models.Task.findAll({
        include: [
            {model: models.Status},
            {model: models.Board},
            {model: models.User},
        ]
    });

    return tasks;
}

export const getTaskById = async(_, { id }) => {
    const task = await models.Task.findByPk(id, {
        include: [
            {model: models.Status},
            {model: models.Board},
            {model: models.User},
        ]
    });

    if (!task) throw new UserInputError("Status não encontrado!");

    return task;
}