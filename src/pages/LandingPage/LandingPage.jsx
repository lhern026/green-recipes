import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LandingPage.css';
export default function LandingPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="landing">
      <div className="cont1">
      <h1>Green recipes</h1>
      <p>this is my landing page</p>
      </div>
      <br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione magni cum illo porro totam, amet quod quasi eveniet aut nostrum culpa! Perferendis deleniti optio voluptatem deserunt ex porro quibusdam unde.</p>
      <br /><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, sed quidem ducimus explicabo at nisi magni, earum tempore quos optio vero sequi, fuga ipsa libero. Iure perferendis dolores vel incidunt?</p>
      <br /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat unde quae perspiciatis incidunt veniam, accusamus, delectus voluptatibus officia voluptas fugiat quasi, sed obcaecati commodi. Veritatis fuga inventore vel quaerat quae.</p>
      
      <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Sign Up': 'Log In'}</button>
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
    </main>
  );
}