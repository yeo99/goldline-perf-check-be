'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("facilities_lowest_class", {
      id: {
        type: Sequelize.STRING,
        allowestNull: false,
        autoIncrement: false,
        primaryKey: true,
      },
      facility_code: {
        type: Sequelize.STRING,
        allowestNull: false,
      },
      upper_category: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable("facilities_lowest_class")
  }
};
