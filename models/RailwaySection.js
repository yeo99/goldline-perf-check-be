'use strict'

module.exports = (sequelize, DataTypes) => {
    const RailwaySection = sequelize.define('RailwaySection', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
        },
        section_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        modelName: 'RailwaySection',
        tableName: 'railway_sections',
        timestamps: false,
    })
    return RailwaySection;
}