import React from 'react'
import useGoogleSignIn from '../useGoogleSignIn'

import './Login.css'



function Login() { 
    const handleGoogleSignIn = useGoogleSignIn()
  return (
    <div className='login'>
        <div className='login-cont'>
            <img src="data:image/jpeg;base64,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" alt="" />
            <h1>Sign in to Slack Clone</h1>
            <p>tirupathamma.slack.com</p>
            <button onClick={handleGoogleSignIn}>Sign in with Google</button>
        </div>
    </div>
  ) 
}

export default Login;
