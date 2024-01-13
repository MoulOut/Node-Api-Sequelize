'use strict';
const isCpfValid = require('../../utils/cpfValidationHelper.js');

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class People extends Model {
    static associate(models) {
      People.hasMany(models.Course, { foreignKey: 'teacher_id' });
      People.hasMany(models.Registration, {
        foreignKey: 'student_id',
        scope: { status: 'registred' },
        as: 'registredClasses',
      });
      People.hasMany(models.Registration, {
        foreignKey: 'student_id',
        as: 'allRegistrations',
      });
    }
  }
  People.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [3, 60],
            msg: 'The field name must range from 3 to 60 characters.',
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            args: true,
            msg: 'Invalid email format.',
          },
        },
      },
      cpf: {
        type: DataTypes.STRING,
        validate: {
          cpfIsValid: (cpf) => {
            if (isCpfValid(cpf)) return;
            throw new Error('CPF number is invalid.');
          },
        },
      },
      active: DataTypes.BOOLEAN,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'People',
      tableName: 'peoples',
      paranoid: true,
      defaultScope: { where: { active: true } },
      scopes: {
        allRegistries: { where: {} },
      },
    }
  );
  return People;
};
