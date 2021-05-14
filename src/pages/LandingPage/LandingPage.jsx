import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LandingPage.css';
import Anime from 'react-anime';
export default function LandingPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
    <Anime>
    <main className="landing">
      <div className="cont1">
      <Anime translateX={[-350]} duration={[7000]} translateY={[100]} >
      <h1>Green recipes</h1>
      </Anime>  
      <Anime translateX={[350]} duration={[2000]}  translateY={[-100]} rotate={['6turn']}>
      <p>Share your edible recipes!</p>
      </Anime> 
      </div>
      <br />
      <Anime translateX={[-150]} duration={[1000]} scale={[0.8]}>
      <p>For those who prefer consuming their medicine in the form of an edible arrangement❤️</p></Anime>
      
      <Anime translateY={[100]} delay={[3000]}  duration={[1000]} scale={[1.1]}>
      <p>Please sign up or login returning user💙</p>
      <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Sign Up': 'Log In'}</button>
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}</Anime>
    </main>
    </Anime>
    </>
  );
}