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
router.put('/peoples/:id', (req, res) => peopleController.updateById(req, res));
router.delete('/peoples/:id', (req, res) =>
  peopleController.deleteById(req, res)
);
router.get('/peoples/:studentId/registrations', (req, res) =>
  peopleController.getActiveRegistrations(req, res)
);
router.get('/peoples/:studentId/registrations/all', (req, res) =>
  peopleController.getAllRegistrations(req, res)
);
router.post('/peoples/:studentId/registrations', (req, res) =>
  registrationController.Create(req, res)
);

module.exports = router;
