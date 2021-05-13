export default function RecipeItem({key,id,recipeName,ingredients,instructions,duration,handleRemoveRecipe}){
    
    return(
        <tr>
        <td >{recipeName}</td>
        <td>{ingredients}</td>
        <td>{instructions}</td>
        <td >{duration}</td>
        <td  onClick={() => handleRemoveRecipe(id)}  className="button"><button>x</button></td>
    </tr>
    )
}