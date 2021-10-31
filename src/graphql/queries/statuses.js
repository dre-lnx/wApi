import { UserInputError } from "apollo-server-express";
const models = require('../../../models/index');

export const getAllStatuses = async() => {
    const statuses = await models.Status.findAll();

    return statuses;
};

export const getStatusById = async(_, { id }) => {
    const status = await models.Status.findByPk(id);

    if (!status) throw new UserInputError("Status não encontrado!");

    return status;
};