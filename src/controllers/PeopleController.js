const Controller = require('./Controller.js');
const PeopleServices = require('../services/PeopleService.js');

const peopleServices = new PeopleServices();

class PeopleController extends Controller {
  constructor() {
    super(peopleServices);
  }

  async getActiveRegistrations(req, res) {
    const { student_id } = req.params;
    try {
      const registrationList =
        await peopleServices.getActiveStudentRegistrations(Number(student_id));

      if (registrationList instanceof Error) {
        return res.status(404).json({ Error: registrationList.message });
      }

      return res.status(200).json(registrationList);
    } catch (error) {
      return res.status(500).json({ Error: error.message });
    }
  }

  async getAllRegistrations(req, res) {
    const { student_id } = req.params;
    try {
      const registrationList = await peopleServices.getAllStudentRegistrations(
        Number(student_id)
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

  async cancelPeopleRegistry(req, res) {
    const { student_id } = req.params;
    try {
      const isCanceled = await peopleServices.cancelPeopleAndRegistry(
        Number(student_id)
      );

      if (isCanceled instanceof Error) {
        return res.status(404).json({ Error: isCanceled.message });
      }

      return res.status(200).json({
        message: `registrations ref to student ${student_id} canceled.`,
      });
    } catch (error) {
      return res.status(500).json({ Error: error.message });
    }
  }
}

module.exports = PeopleController;
