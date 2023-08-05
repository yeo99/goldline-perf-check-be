'use strict'

module.exports = (sequelize, DataTypes) => {
    const FacilitiesLowClass = sequelize.define('FacilitiesLowClass', {
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
        modelName: 'FacilitiesLowClass',
        tableName: 'facilities_low_class',
        timestamps: false,
    })
    return FacilitiesLowClass;
}