import { getAllUsers } from './queries/users'
import { getUserById } from './queries/users'
import { getAllStatuses } from './queries/statuses'
import { getStatusById } from './queries/statuses'
import { getAllBoards } from './queries/boards'
import { getBoardById } from './queries/boards'
import { getAllTasks } from './queries/tasks'
import { getTaskById } from './queries/tasks'
import { createUser } from './mutations/users'
import { updateUser } from './mutations/users'
import { deleteUser } from './mutations/users'
import { createStatus } from './mutations/statuses'
import { updateStatus } from './mutations/statuses'
import { createBoard } from './mutations/boards'
import { updateBoard } from './mutations/boards'
import { deleteBoard } from './mutations/boards'
import { createTask } from './mutations/tasks'
import { updateTask } from './mutations/tasks'
import { deleteTask } from './mutations/tasks'
import { logIn } from './mutations/logIn'
import { getUserBoards } from './queries/boards'
import { getBoardTasks } from './queries/tasks'

const resolvers = {
  Query: {
    //All

    getAllUsers() {
      return getAllUsers()
    },
    getAllStatuses() {
      return getAllStatuses()
    },
    getAllBoards() {
      return getAllBoards()
    },
    getAllTasks() {
      return getAllTasks()
    },

    //By ID

    getUserById(_, { id }) {
      return getUserById(_, { id })
    },
    getStatusById(_, { id }) {
      return getStatusById(_, { id })
    },
    getBoardById(_, { id }) {
      return getBoardById(_, { id })
    },
    getTaskById(_, { id }) {
      return getTaskById(_, { id })
    },

    logIn(_, { data }) {
      return logIn(_, { data })
    },

    //Generals By User

    getUserBoards(_, { id }) {
      return getUserBoards(_, { id })
    },

    getBoardTasks(_, { user, board }) {
      return getBoardTasks(_, { user, board })
    },
  },
  Mutation: {
    //User mutations

    createUser(_, { data }) {
      return createUser(_, { data })
    },
    updateUser(_, { id, data }) {
      return updateUser(_, { id, data })
    },
    deleteUser(_, { id }) {
      return deleteUser(_, { id })
    },

    //Status mutations

    createStatus(_, { data }) {
      return createStatus(_, { data })
    },
    updateStatus(_, { id, data }) {
      return updateStatus(_, { id, data })
    },

    //Board mutations

    createBoard(_, { data }) {
      return createBoard(_, { data })
    },
    updateBoard(_, { id, data }) {
      return updateBoard(_, { id, data })
    },
    deleteBoard(_, { id }) {
      return deleteBoard(_, { id })
    },

    //Task mutations
    createTask(_, { data }) {
      return createTask(_, { data })
    },
    updateTask(_, { id, data }) {
      return updateTask(_, { id, data })
    },
    deleteTask(_, { id }) {
      return deleteTask(_, { id })
    },
  },
}

module.exports = { resolvers }
