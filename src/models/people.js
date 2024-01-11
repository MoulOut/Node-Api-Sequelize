'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class People extends Model {
    static associate(models) {
      People.hasMany(models.Course, { foreignKey: 'teacher_id' });
      People.hasMany(models.Registration, { foreignKey: 'student_id' });
    }
  }
  People.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      cpf: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'People',
      tableName: 'peoples',
    }
  );
  return People;
};
