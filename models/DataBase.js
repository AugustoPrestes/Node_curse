const Sequelize  = require('sequelize')

const sequelize = new Sequelize('postapp', 'root', 'cuzinho1', {
    host: "localhost",
    dialect: "mysql"
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}