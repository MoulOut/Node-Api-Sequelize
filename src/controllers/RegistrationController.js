const Sequelize = require('sequelize');
const Controller = require('./Controller.js');
const RegistrationServices = require('../services/RegistrationService.js');

const registrationServices = new RegistrationServices();

class RegistrationController extends Controller {
  constructor() {
    super(registrationServices);
  }

  async getRegistrationsByStudent(req, res) {
    const { student_id } = req.params;

    try {
      const registrationsOfStudent =
        await registrationServices.getAndCountRegistries({
          where: {
            student_id: Number(student_id),
            status: 'registred',
          },
          limit: 2,
          order: [['id', 'ASC']],
        });

      if (registrationsOfStudent instanceof Error) {
        return res.status(404).json({ Error: registrationsOfStudent.message });
      }

      return res.status(200).json(registrationsOfStudent);
    } catch (error) {
      return res.status(500).json({ Error: error.message });
    }
  }

  async getFullCourses(req, res) {
    const fullCourseLimit = 2;
    try {
      const fullCourses = await registrationServices.getAndCountRegistries({
        where: {
          status: 'registred',
        },
        attributes: ['course_id'],
        group: ['course_id'],
        having: Sequelize.literal(`count(course_id) >= ${fullCourseLimit}`),
      });

      if (fullCourses instanceof Error) {
        return res.status(404).json({ Error: fullCourses.message });
      }

      return res.status(200).json(fullCourses);
    } catch (error) {
      return res.status(500).json({ Error: error.message });
    }
  }
}

module.exports = RegistrationController;
