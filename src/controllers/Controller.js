const idConversor = require('../utils/StringConversorHelper.js');

class Controller {
  constructor(serviceEntity) {
    this.serviceEntity = serviceEntity;
  }

  async getAll(req, res) {
    try {
      const registriesList = await this.serviceEntity.getAllRegistries();

      if (registriesList instanceof Error) {
        return res.status(404).json({ Error: registriesList.message });
      }

      return res.status(200).json(registriesList);
    } catch (error) {
      return res.status(500).json({ Error: error.message });
    }
  }

  async getById(req, res) {
    const { id } = req.params;
    try {
      const registry = await this.serviceEntity.getRegistryById(Number(id));

      if (registry instanceof Error) {
        return res.status(404).json({ Error: registry.message });
      }

      return res.status(200).json(registry);
    } catch (error) {
      return res.status(500).json({ Error: error.message });
    }
  }

  async getOne(req, res) {
    const { ...params } = req.params;
    const where = idConversor(params);
    try {
      const registry = await this.serviceEntity.getOneRegistry(where);

      if (registry instanceof Error) {
        return res.status(404).json({ Error: registry.message });
      }

      return res.status(200).json(registry);
    } catch (error) {
      return res.status(500).json({ Error: error.message });
    }
  }

  async Create(req, res) {
    const registryData = req.body;
    try {
      const newRegistry = await this.serviceEntity.createRegistry(registryData);

      return res.status(201).json(newRegistry);
    } catch (error) {
      return res.status(500).json({ Error: error.message });
    }
  }

  async update(req, res) {
    const { ...params } = req.params;
    const newRegistryData = req.body;
    const where = idConversor(params);

    try {
      const isUpdated = await this.serviceEntity.updateRegistryById(
        where,
        newRegistryData
      );

      if (isUpdated) {
        return res
          .status(200)
          .json({ message: 'Registry updated with success.' });
      }

      return res.status(404).json({ message: 'Registry not found.' });
    } catch (error) {
      return res.status(500).json({ Error: error.message });
    }
  }

  async delete(req, res) {
    const { params } = req.params;
    const where = idConversor(params);

    try {
      const isDeleted = await this.serviceEntity.deleteRegistryById(where);

      if (isDeleted) {
        return res.status(204).json();
      }

      return res.status(404).json({ message: 'Registry not found.' });
    } catch (error) {
      return res.status(500).json({ Error: error.message });
    }
  }
}

module.exports = Controller;
