'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable("facilities_high_class", {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
      },
      facility_code: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable("facilities_high_class");
  }
};
