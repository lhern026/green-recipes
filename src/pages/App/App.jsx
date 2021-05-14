import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import 'bootstrap/dist/css/bootstrap.min.css'
import LandingPage from '../LandingPage/LandingPage';
import * as recipesAPI from '../../utilities/recipes-api';

import NavBar from '../../components/NavBar/NavBar';
import './App.css';
import RecipePage from '../RecipePage/RecipePage';
import NewRecipePage from '../NewRecipePage/NewRecipePage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [input,setInput] = useState({
    recipe:'',
    ingredients: '',
    instructions:'',
    duration:''
})
const [recipes,setRecipes]=useState([]);
async function handleRemoveRecipe(id) {
  await recipesAPI.removeRecipe(id);
  const recipesIndex = await recipesAPI.getAll();
  setRecipes(recipesIndex);
}
async function handleUpdateRecipe(id){
  await recipesAPI.updateRecipe(id);
  const recipesIndex = await recipesAPI.getAll();
  setRecipes(recipesIndex)
}

  
  return (
    <main className="App">
      { user ? 
        <>
          <NavBar user={user} setUser={setUser} />
          
          <Switch>
            <Route path="/recipes/new">
              <NewRecipePage input={input} setInput={setInput} recipes={recipes} setRecipes={setRecipes} handleRemoveRecipe={handleRemoveRecipe} handleUpdateRecipe={handleUpdateRecipe}/>
            </Route>
            <Route path="/recipes">
              <RecipePage recipes={recipes} setRecipes={setRecipes} handleRemoveRecipe={handleRemoveRecipe} handleUpdateRecipe={handleUpdateRecipe}/>
            </Route>
            
            
            <Redirect to="/recipes" />
          </Switch>
          <NavBar user={user} setUser={setUser} />
        </>
        :
        <LandingPage setUser={setUser} user={user}  />
      }
    </main>
  );
}
