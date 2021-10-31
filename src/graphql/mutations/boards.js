import { UserInputError } from "apollo-server-express";
const models = require('../../../models/index');

export const createBoard = async(_, { data }) => {
    const board = await models.Board.create(data);

    return board;
};

export const updateBoard = async(_, { id, data }) => {
    const board = await models.Board.findByPk(id);

    if(!board) throw new UserInputError("Usuário não encontrado!");

    await board.update(data);
    return board;
}

export const deleteBoard = async(_, { id }) => {
    const board = await models.Board.findByPk(id);

    if(!board) throw new UserInputError("Usuário não encontrado!");

    await board.destroy();
    return board;
}