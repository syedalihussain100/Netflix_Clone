import React, { useState } from "react";
import "./LoginScreen.css";
import SignUp from "./SignUp";

const LoginScreen = () => {
  const [signin, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="logo"
        />
        <button className="loginScreen__button">Sign In</button>
        <div className="loginScreen__gradiant" />
      </div>
      <div className="loginScreen__body">
        {signin ? (
          <SignUp />
        ) : (
          <>
            <h1>Unlimited films, Tv programmers and more...</h1>
            <h2>Watch anywhere. Cancel any time.</h2>
            <h3>
              Ready To Watch Enter Your Email to create or restart your
              membership
            </h3>
            <div className="login_input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen_button"
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
