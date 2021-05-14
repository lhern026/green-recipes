import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LandingPage.css';
import Anime from 'react-anime';
export default function LandingPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="landing">
      <div className="cont1">
      <Anime translateX={[-350]} duration={[7000]} translateY={[100]} >
      <h1>Green recipes</h1>
      </Anime>  
      <Anime translateX={[350]} duration={[2000]}  translateY={[-100]} rotate={['6turn']}>
      <p>this is my landing page</p>
      </Anime> 
      </div>
      <br />
      <Anime translateX={[-150]} duration={[1000]} scale={[0.8]}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione magni cum illo porro totam, amet quod quasi eveniet aut nostrum culpa! Perferendis deleniti optio voluptatem deserunt ex porro quibusdam unde.</p></Anime>
      
      <Anime translateY={[100]} delay={[3000]}  duration={[1000]} scale={[1.1]}>
      <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Sign Up': 'Log In'}</button>
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}</Anime>
    </main>
  );
}