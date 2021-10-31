import { statusInputError } from "apollo-server-express";
const models = require('../../../models/index');

export const createStatus = async(_, { data }) => {
    const status = await models.Status.create(data);

    return status;
};

export const updateStatus = async(_, { id, data }) => {
    const status = await models.Status.findByPk(id);

    if(!status) throw new statusInputError("Usuário não encontrado!");

    await status.update(data);
    return status;
};