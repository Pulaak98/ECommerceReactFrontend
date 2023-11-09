import React from "react";
import './CSS/Login.css'

export const LoginSignup = () => {
  return (
    <div className="login">
      <div className="login-container">
        <h1>sign up</h1>
        <div className="login-fileds">
          <input
            type="text"
            placeholder="your name"
          />
          <input
            type="email"
            placeholder="your email"
          />
          <input
            type="password"
            placeholder="password"
          />
        </div>
        <button>continue</button>
        <p className="login-signup">
          already have an account?<span>login here</span>
        </p>
        <div className="login-agree">
          <input type="checkbox" name="" id=""/>
          <p>by continuing I agree terms of uses & privacy policy</p>
        </div>
      </div>
    </div>
  );
};
export default LoginSignup;
