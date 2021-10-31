import { getAllUsers } from './queries/users';
import { getUserById } from './queries/users';
import { getAllStatuses } from "./queries/statuses";
import { getStatusById } from "./queries/statuses";
import { getAllBoards } from './queries/boards';
import { getBoardById } from './queries/boards';
import { getAllTasks } from "./queries/tasks";
import { getTaskById } from "./queries/tasks";
import { createUser } from './mutations/users';
import { updateUser } from './mutations/users';
import { deleteUser } from './mutations/users';
import { createStatus } from './mutations/statuses';
import { updateStatus } from './mutations/statuses';

const resolvers = {
    Query: {

        //All

        getAllUsers() {
            return getAllUsers();
        },
        getAllStatuses() {
            return getAllStatuses();
        },
        getAllBoards() {
            return getAllBoards();
        },
        getAllTasks() {
            return getAllTasks();
        },

        //By ID

        getUserById(_, { id }) {
            return getUserById(_, { id });
        },
        getStatusById(_, { id }) {
            return getStatusById(_, { id });
        },
        getBoardById(_, { id }) {
            return getBoardById(_, { id });
        },
        getTaskById(_, { id }) {
            return getTaskById(_, { id });
        },
    },
    Mutation: {

        //User mutations

        createUser(_, { data }) {
            return createUser(_, { data });
        },
        updateUser(_, { id, data}) {
            return updateUser(_, { id, data });
        },
        deleteUser(_, { id }) {
            return deleteUser(_, { id });
        },

        //Status mutations

        createStatus(_, { data }) {
            return createStatus(_, { data });
        },
        updateStatus(_, { id, data}) {
            return updateStatus(_, { id, data });
        },
    }
};

module.exports = {resolvers};