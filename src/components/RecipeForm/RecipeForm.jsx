import { useEffect, useState } from "react"


export default function RecipeForm({handleAddRecipe}){
    
     const [input,setInput] = useState({
        recipe:'',
        ingredients: '',
        instructions:'',
        duration:''
    })
    function handleChange(evt){
        setInput({ ...input, [evt.target.name]: evt.target.value });

    }
    async function handleSubmit(evt) {
        // Prevent form from being submitted to the server
        evt.preventDefault();
        handleAddRecipe(input);
        
      }
    return(
        <>
        <div >
            <form autoComplete="off"  onSubmit={handleSubmit}>
                <label>Recipe</label>
                <input type="text" name="recipe" value={input.recipe}  onChange={handleChange} required />
                <label>Ingredients</label>
                <input type="text" name="ingredients" value={input.ingredients} onChange={handleChange}  required />
                <label>Instructions</label>
                <input type="text" name="instructions"  value={input.instructions} onChange={handleChange}  required />
                <label>Duration in minutes</label>
                <input type="number" name="duration" value={input.duration} onChange={handleChange}  required />
                
                <button type="submit">Submit</button>
        </form>
        </div>
  </>
    )
}