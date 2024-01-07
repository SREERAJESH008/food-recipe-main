import "./login.css";
import { useNavigate, Link } from "react-router-dom";
import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../components/firebase/firebase.js";
import React, { useState } from "react";
import { useUser } from "../../context/Authentication.jsx";

const Login = () => {
  const navigate = useNavigate();
  const { formFields, setFormFields, setUser, logoutUser, userEmail } =
    useUser();
  const { displayName, email, password, confirmPassword } = formFields;

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("hit");

    if (email && password) {
      try {
        const { user } = await signInAuthUserWithEmailAndPassword(
          email,
          password
        );
        console.log({ user });
        setFormFields({ email: "", password: "", confirmPassword: "" });

        if (user) {
          setUser(user.email, user.displayName);
          navigate("/home");
          console.log(user.email);
          console.log(user.displayName);
        }
      } catch (err) {
        console.log("Error Occurd while Login", err.message);
        console.log(err.code);
        if (err.code === "auth/invalid-credential") {
          alert("Invalid Credentials");
        }
      }
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="container">
      <form id="loginForm" className="form" onSubmit={submitHandler}>
        <h2>Sign In</h2>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username-login"
          name="username"
          onChange={changeHandler}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password-login"
          name="password"
          onChange={changeHandler}
        />

        <button className="btn-1" type="submit">
          Sign In
        </button>

        <Link to={`/signup`}>
          <p className="message"> Don't Have an Account?</p>
        </Link>
      </form>
    </div>
  );
};

export default Login;
