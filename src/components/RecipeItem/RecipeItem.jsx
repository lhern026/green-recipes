export default function RecipeItem({key,id,recipeName,ingredients,instructions,duration}){
    
    return(
        <tr>
        <td>{recipeName}</td>
        <td>{ingredients}</td>
        <td>{instructions}</td>
        <td >{duration}</td>
    </tr>
    )
}