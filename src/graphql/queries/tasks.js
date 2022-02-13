import { UserInputError } from 'apollo-server-express'
const models = require('../../../models/index')

export const getAllTasks = async () => {
  const tasks = await models.Task.findAll({
    include: [
      { model: models.Status },
      { model: models.Board },
      { model: models.User },
    ],
  })

  return tasks
}

export const getTaskById = async (_, { id }) => {
  const task = await models.Task.findByPk(id, {
    include: [
      { model: models.Status },
      { model: models.Board },
      { model: models.User },
    ],
  })

  if (!task) throw new UserInputError('Status não encontrado!')

  return task
}

export const getBoardTasks = async (_, { user, board }) => {
  const tasks = await models.Task.findAll({
    include: [
      { model: models.Status },
      { model: models.Board },
      { model: models.User },
    ],
    where: {
      userId: user,
      boardId: board,
    },
  })

  if (!tasks) throw new UserInputError('Não há tarefas para a board!')

  return tasks
}
