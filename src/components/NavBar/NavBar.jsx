import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css'

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="nav">
      <Link to="/recipes">Recipes</Link>
      &nbsp; | &nbsp;
      <Link to="/recipes/new">New Recipe</Link>
      &nbsp; | &nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut} className="logOut">Log Out</Link>
    </nav>
  );
}