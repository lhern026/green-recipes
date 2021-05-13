import RecipeForm from '../../components/RecipeForm/RecipeForm';
import { useEffect } from 'react';
import * as userService from '../../utilities/users-service';
import * as recipesAPI from '../../utilities/recipes-api';



export default function NewRecipePage({input, recipes,setRecipes,handleRemoveRecipe}) {
  async function handleAddRecipe(recipeData){
    const recipe = await recipesAPI.add(recipeData);
    setRecipes([...recipes, recipe]);
  }
  
  return(
    <>
    <br /><br /><br /><br /><br /><br /><br />
    <RecipeForm input={input} handleAddRecipe={handleAddRecipe} handleRemoveRecipe={handleRemoveRecipe} />
</>)
}