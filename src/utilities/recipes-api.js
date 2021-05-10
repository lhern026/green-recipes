const BASE_URL = '/api/recipes';

export function add(recipeData){
    return sendRequest(BASE_URL, 'POST', recipeData);
}