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
            type: DataTypes.STRING,
            allowNull: false,
        },
        // 요청사항: 담당 대분류 추가
        user_charge: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // 요청사항: 유저 생년월일 추가
        user_birth_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
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
        table: 'users',
        timestamps: false,
    })
    return Users;
}