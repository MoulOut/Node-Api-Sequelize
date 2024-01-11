const Controller = require('./Controller.js');
const RegistrationServices = require('../services/RegistrationService.js');

const registrationServices = new RegistrationServices();

class RegistrationController extends Controller {
  constructor() {
    super(registrationServices);
  }
}

module.exports = RegistrationController;
