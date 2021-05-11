const express = require('express');
const router = express.Router();
const recipesCtrl = require('../../controllers/api/recipes');

router.post('/', recipesCtrl.create);

module.exports = router;