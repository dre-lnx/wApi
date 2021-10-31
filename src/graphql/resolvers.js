import { UserInputError } from "apollo-server-express";
const models = require('../../models/index.js');

//------------------------------Users queries

const getAllUsers = async() => {
    const users = await models.User.findAll();

    return users;
};

const getUserById = async(_, { id }) => {
    const user = await models.User.findByPk(id);

    if (!user) throw new UserInputError("Usuário não encontrado!");

    return user;
};

//------------------------------Statuses queries

const getAllStatuses = async() => {
    const statuses = await models.Status.findAll();

    return statuses;
};

const getStatusById = async(_, { id }) => {
    const status = await models.Status.findByPk(id);

    if (!status) throw new UserInputError("Status não encontrado!");

    return status;
};

//------------------------------Boards queries

const getAllBoards = async() => {
    const boards = await models.Board.findAll({	
        include: [
            {model: models.User}
        ]
    });

    return boards;
};

const getBoardById = async(_, { id }) => {
    const board = await models.Board.findByPk(id, {
        include: [
            {model: models.User}
        ]
    });

    if (!board) throw new UserInputError("Status não encontrado!");

    return board;
}

//------------------------------Tasks queries

const getAllTasks = async() => {
    const tasks = await models.Task.findAll({
        include: [
            {model: models.Status},
            {model: models.Board},
            {model: models.User},
        ]
    });

    return tasks;
}

const getTaskById = async(_, { id }) => {
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





const resolvers = {
    Query: {
        getAllUsers() {
            return getAllUsers();
        },
        getUserById(_,{id}) {
            return getUserById(_, {id});
        },
        getAllStatuses() {
            return getAllStatuses();
        },
        getStatusById(_, { id }) {
            return getStatusById(_, { id });
        },
        getAllBoards() {
            return getAllBoards();
        },
        getBoardById(_, { id }) {
            return getBoardById(_, { id });
        },
        getAllTasks() {
            return getAllTasks();
        },
        getTaskById(_, { id }) {
            return getTaskById(_, { id });
        },
    },
};

module.exports = {resolvers};