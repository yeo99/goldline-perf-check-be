'use strict'

module.exports = ( sequelize, DataTypes ) => {
    const ChecklistResult = sequelize.define('ChecklistResult', {
          id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: false,
            primaryKey: true,
          },
          station_name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          section_name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          facility_code: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          facility_name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          // 평가 필드별 점수
          checklist_each_score: {
            type: DataTypes.JSON,
            allowNull: false,
          },
          // 안전성 합계
          stability_sum_score: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          // 안전성 부문중요도
          stability_importance_sum_score: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          // 안전성 최종 평가지수
          stability_last_score: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          // 내구성 합계
          durability_sum_score: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          // 내구성 부문중요도
          durability_importance_sum_score: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          // 내구성 최종 평가지수
          durability_last_score: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          // 사용성 합계
          usability_sum_score: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          // 사용성 부문중요도
          usability_importance_sum_score: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          // 사용성 최종 평가지수
          usability_last_score: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          // 종합평가지수
          total_sum_score: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          // 평가의견 및 기타사항
          checklist_comment: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    }, {
        modelName: 'ChecklistResult',
        table: 'checklist_result',
        timestamps: true,
    })
    return ChecklistResult;
}