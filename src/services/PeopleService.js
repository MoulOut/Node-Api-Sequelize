const Services = require('./Services.js');

class PeopleServices extends Services {
  constructor() {
    super('People');
  }

  async getStudentRegistrations(id) {
    try {
      const student = await super.getRegistryById(id);
      const registrationList = await student.getRegistredClasses();

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
}

module.exports = PeopleServices;
