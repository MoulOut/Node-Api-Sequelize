const dataSource = require('../database/models');

class Services {
  constructor(modelName) {
    this.model = modelName;
  }

  async getAllRegistries(whereObj = {}) {
    const registriesList = dataSource[this.model].findAll({
      where: { ...whereObj },
    });
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

  async getOneRegistry(whereObj) {
    const registry = await dataSource[this.model].findOne({
      where: { ...whereObj },
    });

    if (registry) {
      return registry;
    }

    throw new Error('Registry not found.');
  }

  async getAndCountRegistries(options) {
    const registriesList = await dataSource[this.model].findAndCountAll({
      ...options,
    });

    if (registriesList) {
      return registriesList;
    }

    return new Error('Registries not found');
  }

  async createRegistry(registryData) {
    const newRegistry = dataSource[this.model].create(registryData);
    if (newRegistry) {
      return newRegistry;
    }
    return new Error('Registry not found.');
  }

  async updateRegistryById(where, newData) {
    const listOfupdatedRegistries = await dataSource[this.model].update(
      newData,
      { where: { ...where } }
    );

    if (listOfupdatedRegistries[0]) {
      return true;
    }

    return false;
  }

  async deleteRegistryById(where) {
    return dataSource[this.model].destroy({ where: { ...where } });
  }
}

module.exports = Services;
