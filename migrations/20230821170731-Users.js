'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      user_password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      user_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      user_email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      user_cellphone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      // 요청사항: 담당 대분류 추가
      user_charge: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      // 요청사항: 유저 생년월일 추가
      user_birth_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      user_company: {
        type: Sequelize.STRING,
        // 재직 회사가 없을수도?
      },
      is_admin: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable("Users")
  }
};
