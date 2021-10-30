'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Board extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Board.belongsTo(models.user, { foreignKey: "userId" });
      Board.hasMany(models.task, { foreignKey: "boardId" });
    }
  };
  Board.init({
    name: DataTypes.STRING,
    allowNull: false
  }, {
    sequelize,
    modelName: 'Board',
  });
  return Board;
};