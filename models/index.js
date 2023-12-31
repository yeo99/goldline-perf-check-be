'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;
/**
 * DB 이름, DB 사용자 이름, DB 접근 비밀번호, config(config파일 전반)
 */
// sequelize = new Sequelize(config.database, config.username, config.password, config)
sequelize = new Sequelize(config)

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// model require
db.railway_section = require("./RailwaySection.js")(sequelize, Sequelize.DataTypes)
db.railway_station = require("./RailwayStation.js")(sequelize, Sequelize.DataTypes)
db.facilities_high_class = require("./FacilitiesHighClass.js")(sequelize, Sequelize.DataTypes)
db.facilities_middle_class = require("./FacilitiesMiddleClass.js")(sequelize, Sequelize.DataTypes)
db.facilities_low_class = require("./FacilitiesLowClass.js")(sequelize, Sequelize.DataTypes)
db.facilities_lowest_class = require("./FacilitiesLowestClass.js")(sequelize, Sequelize.DataTypes)
db.checklist_result = require("./ChecklistResult.js")(sequelize, Sequelize.DataTypes)
db.users = require("./Users.js")(sequelize, Sequelize.DataTypes)

sequelize
  .sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결됨')
  })
  .catch((err) => {
    console.error(err);
  })

module.exports = db;
