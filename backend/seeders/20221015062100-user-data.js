'use strict';

const convertCsv = require('../helpers/createData');
const data = convertCsv('./data/users-data.csv')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', data, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
