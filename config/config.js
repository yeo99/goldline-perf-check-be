require('dotenv').config();
const env = process.env

const development = {
  username:env.DEV_DB_USERNAME,
  password:env.DEV_DB_PASSWORD,
  database:env.DEV_DB_DATABASE,
  host:env.DEV_DB_HOST,
  dialect:env.DEV_DB_DIALECT
};

// const test = {
//   username:root,
//   password:null,
//   database:database_test,
//   host:"127.0.0.1",
//   dialect:mysql
// };

// const production = {
//   username:root,
//   password:null,
//   database:database_test,
//   host:"127.0.0.1",
//   dialect:mysql
// };

module.exports = { development }