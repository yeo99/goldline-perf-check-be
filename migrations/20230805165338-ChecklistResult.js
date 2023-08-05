'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("checklist_result", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
      },
      station_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      section_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      facility_code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      facility_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      // 평가 필드별 점수
      checklist_each_score: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      // 안전성 합계
      stability_sum_score: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      // 안전성 부문중요도
      stability_importance_sum_score: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      // 안전성 최종 평가지수
      stability_last_score: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      // 내구성 합계
      durability_sum_score: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      // 내구성 부문중요도
      durability_importance_sum_score: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      // 내구성 최종 평가지수
      durability_last_score: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      // 사용성 합계
      usability_sum_score: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      // 사용성 부문중요도
      usability_importance_sum_score: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      // 사용성 최종 평가지수
      usability_last_score: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      // 종합평가지수
      total_sum_score: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      // 평가의견 및 기타사항
      checklist_comment: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      // createdAt, updatedAt(Auto timestamps)
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("checklist_result")
  }
};
