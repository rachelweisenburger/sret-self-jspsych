const Sequelize = require('sequelize');
const config = require('./config/config.json');

const { database, username, password } = config.development || config.production;

// Can also pass a connection URI
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

const sequelize = new Sequelize(
    database, username, password, { dialect: 'postgres' }, config, { timezone: '-04:00' }
);

module.exports = sequelize;
