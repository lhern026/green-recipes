import Anime from 'react-anime';

export default function RecipeItem({key,id,recipeName,ingredients,instructions,duration,handleRemoveRecipe,handleUpdateRecipe}){
    
    return(
        <>
        
            <tr>
            
            <td >{recipeName}</td>
           
            <td>{ingredients}</td>
            <td>{instructions}</td>
            <td >{duration}</td>
            <td  onClick={() => handleRemoveRecipe(id)}  className="button"><button>x</button></td>
            <td  onClick={() => handleUpdateRecipe(id)}  className="button"><button>up</button></td>
        </tr>
        
    </>
    )
}