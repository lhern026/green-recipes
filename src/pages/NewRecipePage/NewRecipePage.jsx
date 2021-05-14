import RecipeForm from '../../components/RecipeForm/RecipeForm';
import { useEffect } from 'react';
import * as userService from '../../utilities/users-service';
import * as recipesAPI from '../../utilities/recipes-api';
import Anime from 'react-anime';
import './NewRecipePage.css'

export default function NewRecipePage({input, recipes,setRecipes,handleRemoveRecipe}) {
  async function handleAddRecipe(recipeData){
    const recipe = await recipesAPI.add(recipeData);
    setRecipes([...recipes, recipe]);
  }
  
  return(
    <>
    <Anime rotate={['-1']} translateY={[50]} easing={['linear']}>
    <h1 className="newRecipe">Please store your recipes</h1>
      </Anime>
    <br /><br /><br /><br /><br /><br /><br />
    <RecipeForm input={input} handleAddRecipe={handleAddRecipe} handleRemoveRecipe={handleRemoveRecipe} />
</>)
}