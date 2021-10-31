'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Board extends Model {
    static associate(models) {
      Board.belongsTo(models.User, { foreignKey: "userId" });
      Board.hasMany(models.Task, { foreignKey: "boardId" });
    }
  };
  Board.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Board',
  });
  return Board;
};