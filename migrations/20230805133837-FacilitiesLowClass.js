'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("facilities_low_class", {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
      },
      facility_code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      upper_category: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable("facilities_low_class")
  }
};
