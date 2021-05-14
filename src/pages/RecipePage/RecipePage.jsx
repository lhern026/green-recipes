import { useEffect } from 'react';
import * as userService from '../../utilities/users-service';
import * as recipesAPI from '../../utilities/recipes-api';
import RecipeForm from '../../components/RecipeForm/RecipeForm';
import RecipeItem from  '../../components/RecipeItem/RecipeItem';
import './RecipePage.css'
import Anime from 'react-anime';

export default function RecipePage({recipes,setRecipes,handleRemoveRecipe,handleUpdateRecipe}) {
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
    <div className="cont">
      <Anime rotate={['5']} translateY={[100]} easing={['linear']}>
      <h1 >Recipes</h1>
      </Anime>
      <table className="table">
        <thead>
          <tr className='rows'>
          
            <th>Recipe</th>
            <th>Ingredients</th>
            <th>Instructions</th>
            <th>Duration in Minutes</th>
            <th>Delete</th>
            <th>Update</th>
            
          </tr>
        </thead>
        <tbody className="body">
          {recipes.map(r => <RecipeItem
            key={r._id}
            id={r._id}
            recipeName={r.recipe}
            ingredients={r.ingredients}
            instructions = {r.instructions}
            duration  ={r.duration}
            handleRemoveRecipe= {handleRemoveRecipe}
            handleUpdateRecipe = {handleUpdateRecipe}
          /> )}
        </tbody>
      </table>
      </div>
      
    </>
  );
}