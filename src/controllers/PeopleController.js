const Controller = require('./Controller.js');
const PeopleServices = require('../services/PeopleService.js');

const peopleServices = new PeopleServices();

class PeopleController extends Controller {
  constructor() {
    super(peopleServices);
  }
}

module.exports = PeopleController;
