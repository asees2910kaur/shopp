import React from 'react';
import "../Pages/CSS/loginSignUp.css";

export const LoginSignUp = () => {
  return (
     <div className="loginSignUp">
      <div className="loginSignUp-container">
        <h1>Sign Up</h1>
        <div className="loginSignUp-fields">
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Your Email Address'/>
          <input type="password" placeholder='Enter Your Password'/>
        </div>
        <button>Continue</button>
        <p className='loginSignUp-login'>Already Have an account?<span> login here</span></p>
        <div className="loginSIgnUp-agree">
          <input type="checkbox" name='' id=''/>
          <p>By clicking, I agree to the terms of use of the policy.</p>
        </div>
      </div>
     </div>
  )
}