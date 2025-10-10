const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database_test', 'rachelw', '', {
  host: '127.0.0.1',
  dialect: 'postgres',
  logging: console.log
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('✅ Connection has been established successfully.');
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
  } finally {
    await sequelize.close();
  }
}

testConnection();

