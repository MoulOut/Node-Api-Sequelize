const { Router } = require('express');
const CategorieController = require('../controllers/CategorieController.js');

const categorieController = new CategorieController();

const router = Router();

router.get('/categorie', (req, res) => categorieController.getAll(req, res));
router.post('/categorie', (req, res) => categorieController.Create(req, res));
router.get('/categorie/:id', (req, res) => categorieController.getById(req, res));
router.put('/categorie/:id', (req, res) => categorieController.updateById(req, res));
router.delete('/categorie/:id', (req, res) =>
  categorieController.deleteById(req, res)
);

module.exports = router;
