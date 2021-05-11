const BASE_URL = '/api/recipes';

export async function sendRecipe(formData) {
  // Fetch uses an options object as a second arg to make requests
  // other than basic GET requests, include data, headers, etc. 
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    // Fetch requires data payloads to be stringified
    // and assigned to a body property on the options object
    body: JSON.stringify(formData)
  });
  // Check if request was successful
  if (res.ok) {
    // res.json() will resolve to the JWT
    return res.json();
  } else {
    throw new Error('Invalid Sign Up');
  }
}