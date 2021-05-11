import * as recipesAPI from './recipes-api';

export async function sendRecipe(formData) {
    try {
      // Delegate the network request code to the users-api.js API module
      // which will ultimately return a JSON Web Token (JWT)
      const recipe = await recipesAPI.sendRecipe(formData);
      // Baby step by returning whatever is sent back by the server
      return recipe;
    } catch {
      throw new Error('Invalid Sign Up');
    }
  }