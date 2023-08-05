'use strict'

module.exports = (sequelize, DataTypes) => {
    const FacilitiesLowestClass = sequelize.define('FacilitiesLowestClass', {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            autoIncrement: false,
            primaryKey: true,
        },
        facility_code: {
            type: DataTypes.STRING,
            allowNull: false,
            autoIncrement: false,
        },
        upper_category: {
            type: DataTypes.STRING,
            allowNull: false,
            autoIncrement: false,
        }
    }, {
        modelName: 'FacilitiesLowestClass',
        tableName: 'facilities_lowest_class',
        timestamps: false,
    })
    return FacilitiesLowestClass;
}