import * as recipesAPI from './recipes-api';

export async function sendRecipe( formData) {
    try {
   
      const recipe = await recipesAPI.sendRecipe(formData);
      // Baby step by returning whatever is sent back by the server
      return recipe;
    } catch {
      throw new Error('Invalid Sign Up');
    }
  }