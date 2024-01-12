const Controller = require('./Controller.js');
const PeopleServices = require('../services/PeopleService.js');

const peopleServices = new PeopleServices();

class PeopleController extends Controller {
  constructor() {
    super(peopleServices);
  }

  async getRegistrations(req, res) {
    const { studentId } = req.params;
    try {
      const registrationList = await peopleServices.getStudentRegistrations(
        Number(studentId)
      );

      if (registrationList instanceof Error) {
        return res.status(404).json({ Error: registrationList.message });
      }

      return res.status(200).json(registrationList);
    } catch (error) {
      return res.status(500).json({ Error: error.message });
    }
  }

  async getAllPeople(req, res) {
    try {
      const peopleList = await peopleServices.getPeopleByScope();

      if (peopleList instanceof Error) {
        return res.status(404).json({ Error: peopleList.message });
      }

      return res.status(200).json(peopleList);
    } catch (error) {
      return res.status(500).json({ Error: error.message });
    }
  }
}

module.exports = PeopleController;
