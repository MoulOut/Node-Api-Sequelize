const dataSource = require('../database/models');

class Services {
  constructor(modelName) {
    this.model = modelName;
  }

  async getAllRegistries() {
    return dataSource[this.model].findAll();
  }

  async getRegistryById(id) {
    const registry = await dataSource[this.model].findByPk(id);
    if (registry) {
      return registry;
    }
    throw new Error('Registry not Found.');
  }

  async createRegistry(registryData) {
    return dataSource[this.model].create(registryData);
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
