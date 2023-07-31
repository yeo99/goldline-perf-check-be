'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    /**
     * in terminal,
     * sequelize db:migrate
     */
    queryInterface.createTable("railway_sections", {
      id: {
        type: Sequelize.INTEGER.UNSIGNED
      },
      section_name: {
        type: Sequelize.STRING
      }
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    /**
     * in terminal,
     * sequelize db:migrate:undo
     */
    queryInterface.dropTable("railway_sections");
  }
};
