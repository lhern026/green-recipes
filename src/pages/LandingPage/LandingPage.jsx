import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LandingPage.css';
export default function LandingPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="landing">

      <h1>Green recipes</h1>
      <p>this is my landing page</p>
      <br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione magni cum illo porro totam, amet quod quasi eveniet aut nostrum culpa! Perferendis deleniti optio voluptatem deserunt ex porro quibusdam unde.</p>
      <br /><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ullam. Accusantium voluptatum provident, quo asperiores ipsum harum tenetur nihil magnam, quasi in quia? Necessitatibus aliquam maxime aperiam eveniet quasi quisquam.<br /><br />Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus cupiditate laudantium doloremque, incidunt, saepe eligendi at eum vero possimus quod repudiandae ratione voluptas qui rem harum nisi officiis eveniet. In.<br /><br />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti repellendus labore laboriosam sed facilis omnis consectetur, possimus consequuntur a odit, debitis aliquam hic illo earum sunt tenetur. Debitis, voluptatem ea.<br />
      <br /><br />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem dolorem mollitia, exercitationem ut deleniti ipsam debitis facilis velit harum expedita alias nemo beatae fuga provident voluptatibus. Fugit iure dicta consequuntur.<br /><br /><br /><br />
      <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Sign Up': 'Log In'}</button>
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
    </main>
  );
}