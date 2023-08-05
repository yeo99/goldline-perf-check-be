'use strict'

module.exports = (sequelize, DataTypes) => {
    const FacilitiesMiddleClass = sequelize.define('FacilitiesMiddleClass', {
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
        modelName: 'FacilitiesMiddleClass',
        tableName: 'facilities_middle_class',
        timestamps: false,
    })
    return FacilitiesMiddleClass;
}