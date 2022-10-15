'use strict';

const convertCsv = require('../helpers/createData');
const data = convertCsv('./data/tournament-data.csv')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tournaments', data, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tournaments', null, {});
  }
};
