'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: 'Email is already exists'
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'Invalid email format'
        }
      }
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    coin: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    picture: {
      allowNull: false,
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};