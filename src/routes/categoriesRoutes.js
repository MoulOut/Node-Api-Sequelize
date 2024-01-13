const { Router } = require('express');
const CategorieController = require('../controllers/CategorieController.js');

const categorieController = new CategorieController();

const router = Router();

router.get('/categories', (req, res) => categorieController.getAll(req, res));
router.post('/categories', (req, res) => categorieController.Create(req, res));
router.get('/categories/:id', (req, res) => categorieController.getById(req, res));
router.put('/categories/:id', (req, res) => categorieController.update(req, res));
router.delete('/categories/:id', (req, res) =>
  categorieController.delete(req, res)
);

module.exports = router;
