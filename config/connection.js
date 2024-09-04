const { Sequelize } = require('sequelize');

// Set up connection to database
const sequelize = new Sequelize({
    dialect: 'sqlite',
    username: "root",
    password: "Admin@123",
    database: "graphqldemo",
    host: "localhost",
});

module.exports = sequelize;