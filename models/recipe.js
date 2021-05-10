const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const recipeSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    recipe: { type: String, required: true },
    ingredients: { type: String, required: true },
    instructions: { type: String, required: true },
    duration: {type: Number}
    
    
  }, {
    timestamps: true
  });



module.exports = mongoose.model('Recipe', recipeSchema);