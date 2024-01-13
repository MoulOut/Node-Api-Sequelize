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
          student_id: Number(student_id),
          status: 'registred',
        });

      if (registrationsOfStudent instanceof Error) {
        return res.status(404).json({ Error: registrationsOfStudent.message });
      }

      return res.status(200).json(registrationsOfStudent);
    } catch (error) {
      return res.status(500).json({ Error: error.message });
    }
  }
}

module.exports = RegistrationController;
