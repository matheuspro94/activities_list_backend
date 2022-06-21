const Sequelize = require('sequelize')
const dbconfig = require('../config/database')
const ActivityModel = require('./Activity')

const connection = new Sequelize(dbconfig)

ActivityModel.init(connection)

module.exports = connection
