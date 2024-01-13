const { Op } = require('sequelize');
const Controller = require('./Controller.js');
const CourseServices = require('../services/CourseService.js');

const courseServices = new CourseServices();

class CourseController extends Controller {
  constructor() {
    super(courseServices);
  }

  async getCourses(req, res) {
    const { initial_date, final_date } = req.query;
    const where = {};

    initial_date || final_date ? (where.start_date = {}) : null;
    initial_date ? (where.start_date[Op.gte] = initial_date) : null;
    final_date ? (where.start_date[Op.lte] = final_date) : null;

    try {
      const courseList = await courseServices.getAllRegistries(where);

      if (courseList instanceof Error) {
        return res.status(404).json({ Error: courseList.message });
      }
      return res.status(200).json(courseList);
    } catch (error) {
      return res.status(500).json({ Error: error.message });
    }
  }
}

module.exports = CourseController;
