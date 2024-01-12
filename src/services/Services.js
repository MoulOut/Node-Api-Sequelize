const dataSource = require('../database/models');

class Services {
  constructor(modelName) {
    this.model = modelName;
  }

  async getAllRegistries() {
    const registriesList = dataSource[this.model].findAll();
    if (registriesList) {
      return registriesList;
    }
    return new Error('Registries not found');
  }

  async getRegistriesByScope(scope) {
    const registriesList = dataSource[this.model].scope(scope).findAll();
    if (registriesList) {
      return registriesList;
    }
    return new Error('Registries not found');
  }

  async getRegistryById(id) {
    const registry = await dataSource[this.model].findByPk(id);
    if (registry) {
      return registry;
    }
    throw new Error('Registry not found.');
  }

  async createRegistry(registryData) {
    const newRegistry = dataSource[this.model].create(registryData);
    if (newRegistry) {
      return newRegistry;
    }
    return new Error('Registry not found.');
  }

  async updateRegistryById(id, newData) {
    const listOfupdatedRegistries = await dataSource[this.model].update(
      newData,
      { where: { id: id } }
    );

    if (listOfupdatedRegistries[0]) {
      return true;
    }

    return false;
  }

  async deleteRegistryById(id) {
    return dataSource[this.model].destroy({ where: { id: id } });
  }
}

module.exports = Services;
