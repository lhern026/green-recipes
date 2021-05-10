export default function RecipeForm(){
    return(
        <>
            <form autoComplete="off" >
            <label>Recipe</label>
            <input type="text" name="recipe"  required />
            <label>Ingredients</label>
            <input type="text" name="ingredients"  required />
            <label>Instructions</label>
            <input type="text" name="instructions"  required />
            <label>Duration in minutes</label>
            <input type="number" name="duration"  required />
            
            <button type="submit">Submit</button>
        </form>
  </>
    )
}