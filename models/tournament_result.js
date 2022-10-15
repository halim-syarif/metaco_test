'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tournament_result extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tournament_result.init({
    team_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    position: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    point: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    tournament_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'Tournament_result',
  });
  return Tournament_result;
};