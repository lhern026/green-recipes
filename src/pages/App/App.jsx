import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';

import LandingPage from '../LandingPage/LandingPage';


import NavBar from '../../components/NavBar/NavBar';
import './App.css';
import RecipePage from '../RecipePage/RecipePage';
import NewRecipePage from '../NewRecipePage/NewRecipePage';

export default function App() {
  const [user, setUser] = useState(getUser());
  
  return (
    <main className="App">
      { user ? 
        <>
          <NavBar user={user} setUser={setUser} />
          
          <Switch>
            <Route path="/recipes/new">
              <NewRecipePage />
            </Route>
            <Route path="/recipes">
              <RecipePage/>
            </Route>
            
            <Redirect to="/recipes" />
          </Switch>
        </>
        :
        <LandingPage setUser={setUser}   />
      }
    </main>
  );
}
