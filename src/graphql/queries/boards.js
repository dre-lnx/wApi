import { UserInputError } from "apollo-server-express";
const models = require('../../../models/index');

export const getAllBoards = async() => {
    const boards = await models.Board.findAll({	
        include: [
            {model: models.User}
        ]
    });

    return boards;
};

export const getBoardById = async(_, { id }) => {
    const board = await models.Board.findByPk(id, {
        include: [
            {model: models.User}
        ]
    });

    if (!board) throw new UserInputError("Status não encontrado!");

    return board;
}

export const getUserBoards = async(_, { id }) => {
    const boards = await models.Board.findAll({
        include: [
            {model: models.User}
        ],
        where: {
            userId: id
        }
    })

    if (!boards) throw new UserInputError("Usuário sem boards");
    console.log(boards)

    return boards;
}
