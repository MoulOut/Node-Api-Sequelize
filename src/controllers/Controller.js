class Controller {
  constructor(serviceEntity) {
    this.serviceEntity = serviceEntity;
  }

  async getAll(req, res) {
    try {
      const registriesList = await this.serviceEntity.getAllRegistries();

      return res.status(200).json(registriesList);
    } catch (error) {
      throw new Error();
    }
  }

  async getById(req, res) {
    const { id } = req.params;
    try {
      const registry = await this.serviceEntity.getRegistryById(Number(id));

      return res.status(200).json(registry);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async Create(req, res) {
    const registryData = req.body;
    try {
      const newRegistry = await this.serviceEntity.createRegistry(registryData);

      return res.status(201).json(newRegistry);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async updateById(req, res) {
    const { id } = req.params;
    const newRegistryData = req.body;
    try {
      const isUpdated = await this.serviceEntity.updateRegistryById(
        Number(id),
        newRegistryData
      );

      if (isUpdated) {
        return res
          .status(200)
          .json({ message: 'Registry updated with success.' });
      }

      return res.status(404).json({ message: 'Registry not found.' });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async deleteById(req, res) {
    const { id } = req.params;
    try {
      const isDeleted = await this.serviceEntity.deleteRegistryById(Number(id));

      if (isDeleted) {
        return res.status(204).json();
      }

      return res.status(404).json({ message: 'Registry not found.' });
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = Controller;
