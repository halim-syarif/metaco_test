'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tournament extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tournament.init({
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    start_date: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    end_date: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    team_count: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    slot: {
      allowNull: false,
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'Tournament',
  });
  return Tournament;
};