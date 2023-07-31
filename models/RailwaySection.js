// const { Model, DataTypes } = require('sequelize');
// const db = require('../models/index')
// const sequelize = db.sequelize

// class RailwaySection extends Model {}

// RailwaySection.init({
//     id: {
//         type: DataTypes.INTEGER.UNSIGNED,
//         allowNull: false,
//         primaryKey: true,
//     },
//     section_name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     }
// }, {
//     sequelize,
//     modelName: 'RailwaySection',
//     tableName: 'railway_sections',
//     timestamps: false,
// });

// module.exports = RailwaySection;
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