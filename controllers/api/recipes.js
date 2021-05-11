const User = require('../../models/user');
const Recipe =  require('../../models/recipe')

module.exports = {
    create
  };
  
async function create(req, res) {
    try {
        const recipe = await Recipe.create(req.body);
       
        // Yes, we can send back a simple string
        res.json(recipe);
    } catch(err) {
        // Client will check for non-200 status code
        // 400 = Bad Request
        res.status(400).json(err);
    }
    }