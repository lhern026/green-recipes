const express = require('express');
const router = express.Router();
const recipesCtrl = require('../../controllers/api/recipes');

router.get('/', recipesCtrl.getAll);
router.post('/', recipesCtrl.create);
router.delete('/:id', recipesCtrl.removeRecipe);


module.exports = router;