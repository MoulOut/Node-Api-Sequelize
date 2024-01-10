const { Router } = require('express');
const PeopleController = require('../controllers/PeopleController.js');

const peopleController = new PeopleController();

const router = Router();

router.get('/peoples', (req, res) => peopleController.getAll(req, res));
router.post('/peoples', (req, res) => peopleController.Create(req, res));
router.get('/peoples/:id', (req, res) => peopleController.getById(req, res));
router.put('/peoples/:id', (req, res) => peopleController.updateById(req, res));
router.delete('/peoples/:id', (req, res) =>
  peopleController.deleteById(req, res)
);

module.exports = router;
