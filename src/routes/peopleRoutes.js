const { Router } = require('express');
const PeopleController = require('../controllers/PeopleController.js');

const router = Router();

router.get('/peoples', PeopleController.getAll);

module.exports = router;
