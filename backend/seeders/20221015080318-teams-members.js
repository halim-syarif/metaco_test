'use strict';

const convertCsv = require('../helpers/createData');
const data = convertCsv('./data/teams-member-data.csv')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Team_members', data, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Team_members', null, {});
  }
};
