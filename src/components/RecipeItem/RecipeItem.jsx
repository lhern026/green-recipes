import Anime from 'react-anime';
import './RecipeItem.css';

export default function RecipeItem({key,id,recipeName,ingredients,instructions,duration,handleRemoveRecipe,handleUpdateRecipe}){
    
    return(
        <>
        
            <tr className="recipeItemRow">
                <td >{recipeName}</td>
                <td>{ingredients}</td>
                <td>{instructions}</td>
                <td >{duration}</td>
                <td  onClick={() => handleRemoveRecipe(id)}  className="button"><button className="recipeButton">❌</button></td>
                <td  onClick={() => handleUpdateRecipe(id)}  className="button"><button className="recipeButton">✅</button></td>
        </tr>
        
    </>
    )
}