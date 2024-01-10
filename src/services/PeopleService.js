const Services = require('./services.js');

class PeopleServices extends Services {
  constructor() {
    super('People');
  }
}

module.exports = PeopleServices;
