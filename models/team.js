'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    
    static associate(models) {
      Team.belongsTo(models.User, {foreignKey: 'captain_id'})
      Team.hasMany(models.Tournament, {foreignKey: 'tournament_id'})
    }
  }
  Team.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    captain_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    logo: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    tournament_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'Team',
  });
  return Team;
};