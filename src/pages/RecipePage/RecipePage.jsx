import { useEffect } from 'react';
import * as userService from '../../utilities/users-service';
import * as recipesAPI from '../../utilities/recipes-api';
import RecipeForm from '../../components/RecipeForm/RecipeForm';
import RecipeItem from  '../../components/RecipeItem/RecipeItem';
import './RecipePage.css'

export default function RecipePage({recipes,setRecipes,handleRemoveRecipe}) {
  useEffect(function(){
    async function getRecipes(){
      const recipes = await recipesAPI.getAll();
      setRecipes(recipes);
      console.log(recipes);
    }
    getRecipes();
    
  },[]);
  
  
  return (
    <>
      
      <h1>recipes</h1>
      <table className="table">
        <thead>
          <tr>
            <th>recipe</th>
            <th>ingredients</th>
            <th>instructions</th>
            <th>duration</th>
            <th>delete(;</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map(r => <RecipeItem
            key={r._id}
            id={r._id}
            recipeName={r.recipe}
            ingredients={r.ingredients}
            instructions = {r.instructions}
            duration  ={r.duration}
            handleRemoveRecipe= {handleRemoveRecipe}
          /> )}
        </tbody>
      </table>
      
    </>
  );
}