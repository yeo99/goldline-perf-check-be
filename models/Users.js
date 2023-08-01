'use strict'

module.exports = ( sequelize, DataTypes ) => {
    const Users = sequelize.define('Users', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        user_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_cellphone: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        user_company: {
            type: DataTypes.STRING,
            // 재직 회사가 없을수도?
        },
        is_admin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    }, {
        modelName: 'Users',
        talble: 'users',
        timestamps: false,
    })
    return Users;
}