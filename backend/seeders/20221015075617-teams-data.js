'use strict';

const convertCsv = require('../helpers/createData');
const data = convertCsv('./data/teams-data.csv')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Teams', data, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Teams', null, {});
  }
};
