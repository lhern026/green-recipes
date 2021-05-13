import sendRequest from './send-request';
const BASE_URL = '/api/recipes';

export function getAll(){
  return sendRequest(BASE_URL);
}
export function removeRecipe(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

export function add(formData) {
  // Fetch uses an options object as a second arg to make requests
  // other than basic GET requests, include data, headers, etc. 
  return sendRequest(BASE_URL, 'POST', formData);
    
}
