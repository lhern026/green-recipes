import { useEffect } from 'react';
import * as userService from '../../utilities/users-service';
import * as recipesAPI from '../../utilities/recipes-api';

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
      <h1>List of recipes</h1>
        <div>
        </div>
                
      
    </>
  );
}