import { useEffect, useState } from "react"


export default function RecipeForm(){
    const [recipes,setRecipes] = useState({
        recipe:'',
        ingredients: '',
        instructions:'',
        duration:''
    })
    function handleChange(evt){
        setRecipes({ ...recipes, [evt.target.name]: evt.target.value });

    }
    async function handleSubmit(evt) {
        // Prevent form from being submitted to the server
        evt.preventDefault();
        
      }
    return(
        <>
        <div onSubmit={handleSubmit}>
            <form autoComplete="off" >
                <label>Recipe</label>
                <input type="text" name="recipe" value={recipes.recipe}  onChange={handleChange} required />
                <label>Ingredients</label>
                <input type="text" name="ingredients" value={recipes.ingredients} onChange={handleChange}  required />
                <label>Instructions</label>
                <input type="text" name="instructions"  value={recipes.instructions} onChange={handleChange}  required />
                <label>Duration in minutes</label>
                <input type="number" name="duration" value={recipes.duration} onChange={handleChange}  required />
                
                <button type="submit">Submit</button>
        </form>
        </div>
  </>
    )
}