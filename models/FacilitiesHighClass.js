'use strict'

module.exports = (sequelize, DataTypes) => {
    const FacilitiesHighClass = sequelize.define('FacilitiesHighClass', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: false
            },
            facility_code: {
                type: DataTypes.STRING,
                allowNull: false,
                autoIncrement: false,
            }
        }, {
            modelName: 'FacilitiesHighClass',
            tableName: 'facility_high_class',
            timestamps: false,
        }
    )
    return FacilitiesHighClass;
}