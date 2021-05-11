import {  useState } from "react";
import { sendRecipe} from "../../utilities/recipes-service";


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
        
        try{
            const formData = {...input}
            
            const recipe = await sendRecipe(formData)
            console.log(recipe);

        } catch{

        }
        
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