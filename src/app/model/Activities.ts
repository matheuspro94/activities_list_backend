const { Model, DataTypes } = require('sequelize')

class Activity extends Model {
  static init (connection: any) {
    super.init({
      name: DataTypes.STRING,
      dateExecution: DataTypes.DATE,
      situation: DataTypes.STRING,
      priority: DataTypes.STRING,
      dateConclusion: DataTypes.DATE
    }, {
      sequelize: connection
    })
  }
}

module.exports = Activity
