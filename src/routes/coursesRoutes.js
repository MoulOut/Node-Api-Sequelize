const { Router } = require('express');
const CourseController = require('../controllers/CourseController.js');

const courseController = new CourseController();

const router = Router();

router.get('/courses', (req, res) => courseController.getAll(req, res));
router.post('/courses', (req, res) => courseController.Create(req, res));
router.get('/courses/:id', (req, res) => courseController.getById(req, res));
router.put('/courses/:id', (req, res) => courseController.updateById(req, res));
router.delete('/courses/:id', (req, res) =>
  courseController.deleteById(req, res)
);

module.exports = router;
