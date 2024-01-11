const { Router } = require('express');
const RegistrationController = require('../controllers/RegistrationController.js');

const registrationController = new RegistrationController();

const router = Router();

router.get('/registration', (req, res) => registrationController.getAll(req, res));
router.post('/registration', (req, res) => registrationController.Create(req, res));
router.get('/registration/:id', (req, res) => registrationController.getById(req, res));
router.put('/registration/:id', (req, res) => registrationController.updateById(req, res));
router.delete('/registration/:id', (req, res) =>
  registrationController.deleteById(req, res)
);

module.exports = router;
