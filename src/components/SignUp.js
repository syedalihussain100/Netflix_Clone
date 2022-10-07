import React, { useState, useRef } from "react";
import "./Signup.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { ref, set } from "firebase/database";
import { auth, db } from "../firebase";
import { toast } from "react-toastify";

const SignUp = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        set(ref(db, "users/" + user.uid), {
          email: user.email,
        });
        toast.success("Welcome Netflix Application");
      })
      .catch((error) => {
        toast.error(error.message);
      });
    setEmail("");
    setPassword("");
  };

  const signin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        toast.success("Login Successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
    setEmail("");
    setPassword("");
  };
  return (
    <div className="signup">
      <form>
        <h1>SignIn</h1>
        <input
          ref={emailRef}
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={password}
          ref={passwordRef}
          type="password"
          placeholder="Enter Your Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="Signup_button" type="submit" onClick={signin}>
          Sign In
        </button>
        <h4>
          <span className="signup_span"> New to Netflix? </span>
          <span className="signup_link" onClick={register}>
            Sign up Now
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUp;
