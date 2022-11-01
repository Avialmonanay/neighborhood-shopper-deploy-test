const sequelize = require('../config/connection');
const products = require('./products');
const comments = require('./comments');
const users = require('./users');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await products();

  await comments();

  await users();

  process.exit(0);
};

seedAll();