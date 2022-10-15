'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Team_member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Team_member.init({
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    team_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    roles: {
      allowNull: false,
      type: DataTypes.ENUM('CAPTAIN', 'MEMBER', 'STANDIN')
    },
    ingame_id: {
      allowNull: false,
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'Team_member',
  });
  return Team_member;
};