const database = require('../models/index.js');

class PeopleController {
  static async getAll(req, res) {
    try {
      const peoplesList = await database.People.findAll();
      return res.status(200).json(peoplesList);
    } catch (error) {
      // error handling
    }
  }
}

module.exports = PeopleController;
