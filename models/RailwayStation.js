'use strict'

module.exports = (sequelize, DataTypes) => {
    const RailwayStation = sequelize.define('RailwayStation', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
        },
        station_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        modelName: 'RailwayStation',
        tableName: 'railway_stations',
        timestamps: false,
    })
    return RailwayStation;
}