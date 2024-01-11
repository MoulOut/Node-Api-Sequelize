const Controller = require('./Controller.js');
const CategorieServices = require('../services/CategorieService.js');

const categorieServices = new CategorieServices();

class CategorieController extends Controller {
  constructor() {
    super(categorieServices);
  }
}

module.exports = CategorieController;
