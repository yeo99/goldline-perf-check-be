'use strict'

module.exports = (sequelize, DataTypes) => {
    const FacilitiesHighClass = sequelize.define('FacilitiesHighClass', {
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
            }
        }, {
            modelName: 'FacilitiesHighClass',
            tableName: 'facilities_high_class',
            timestamps: false,
        }
    )
    return FacilitiesHighClass;
}