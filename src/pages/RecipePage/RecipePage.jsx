import { useEffect } from 'react';
import * as userService from '../../utilities/users-service';
import * as recipesAPI from '../../utilities/recipes-api';
import RecipeForm from '../../components/RecipeForm/RecipeForm';

export default function RecipePage({recipes,setRecipes}) {
  useEffect(function(){
    async function getRecipes(){
      const recipes = await recipesAPI.getAll();
      setRecipes(recipes);
    }
    getRecipes();
    
  },[]);
  
  return (
    <>
      <h1>{recipes.ingredients}</h1>
        <div>
        {recipes.ingredients}
          
        
      
        </div>
                
      
    </>
  );
}