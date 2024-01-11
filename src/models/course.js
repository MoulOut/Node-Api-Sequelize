'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    static associate(models) {
      Course.belongsTo(models.Categorie, { foreignKey: 'categorie_id' });
      Course.belongsTo(models.People, { foreignKey: 'teacher_id' });
    }
  }
  Course.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      start_date: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: 'Course',
      tableName: 'courses',
    }
  );
  return Course;
};
