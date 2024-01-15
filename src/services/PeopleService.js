const dataSource = require('../database/models');
const Services = require('./Services.js');

class PeopleServices extends Services {
  constructor() {
    super('People');
    this.registrationServices = new Services('Registration');
  }

  async getActiveStudentRegistrations(id) {
    try {
      const student = await super.getRegistryById(id);
      const registrationList = await student.getRegistredClasses();

      return registrationList;
    } catch (error) {
      return new Error(error.message);
    }
  }

  async getAllStudentRegistrations(id) {
    try {
      const student = await super.getRegistryById(id);
      const registrationList = await student.getAllRegistrations();

      return registrationList;
    } catch (error) {
      return new Error(error.message);
    }
  }

  async getPeopleByScope() {
    try {
      const peopleList = await super.getRegistriesByScope('allRegistries');

      return peopleList;
    } catch (error) {
      return new Error(error.message);
    }
  }

  async cancelPeopleAndRegistry(studentId) {
    return dataSource.sequelize.transaction(async (transaction) => {
      await super.updateRegistry(
        { id: studentId },
        { active: false },
        transaction
      );
      await this.registrationServices.updateRegistry(
        { student_id: studentId },
        { status: 'canceled' },
        transaction
      );
    });
  }
}

module.exports = PeopleServices;
