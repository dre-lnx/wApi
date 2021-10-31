'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
      Task.belongsTo(models.Status, { foreignKey: "statusId" });
      Task.belongsTo(models.Board, { foreignKey: "boardId" });
      Task.belongsTo(models.User, { foreignKey: "userId" });

    }
  };
  Task.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};