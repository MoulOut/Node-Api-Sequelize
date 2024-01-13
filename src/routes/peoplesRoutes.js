const { Router } = require('express');
const PeopleController = require('../controllers/PeopleController.js');
const RegistrationController = require('../controllers/RegistrationController.js');

const peopleController = new PeopleController();
const registrationController = new RegistrationController();

const router = Router();

router.get('/peoples', (req, res) => peopleController.getAll(req, res));
router.get('/peoples/all', (req, res) =>
  peopleController.getAllPeople(req, res)
);
router.post('/peoples', (req, res) => peopleController.Create(req, res));
router.get('/peoples/:id', (req, res) => peopleController.getById(req, res));
router.put('/peoples/:id', (req, res) => peopleController.update(req, res));
router.delete('/peoples/:id', (req, res) =>
  peopleController.delete(req, res)
);
router.get('/peoples/:student_id/registrations', (req, res) =>
  peopleController.getActiveRegistrations(req, res)
);
router.get('/peoples/:student_id/registrations/all', (req, res) =>
  peopleController.getAllRegistrations(req, res)
);
router.get('/peoples/:student_id/registrations/confirmed', (req, res) =>
  registrationController.getRegistrationsByStudent(req, res)
);
router.get('/peoples/:student_id/registrations/:id', (req, res) =>
  registrationController.getOne(req, res)
);
router.post('/peoples/:student_id/registrations', (req, res) =>
  registrationController.Create(req, res)
);
router.put('/peoples/:student_id/registrations/:id', (req, res) =>
  registrationController.update(req, res)
);
router.delete('/peoples/:student_id/registrations/:id', (req, res) =>
  registrationController.delete(req, res)
);

module.exports = router;
