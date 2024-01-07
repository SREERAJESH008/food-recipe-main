import "./signup.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUser } from "../../context/Authentication";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../components/firebase/firebase";

const SignUp = () => {
  const navigate = useNavigate();

  const { formFields, setFormFields, setUser, logoutUser, userEmail } =
    useUser();
  const { displayName, email, password, confirmPassword } = formFields;

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password do not Match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      const userDocRef = await createUserDocumentFromAuth(user, {
        displayName,
      });
      if (userDocRef) {
        alert("SignUp Success");
        navigate("/login");
      }
    } catch (err) {
      console.log("Something Happened", err.message);
      console.log(err.code);
      if (err.code === "auth/email-already-in-use") {
        alert("");
      } else if (err.code === "auth/weak-password") {
        alert("");
      }
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="container-2">
      <form id="signupForm" className="form" onSubmit={submitHandler}>
        <h2>Sign Up</h2>
        <label htmlFor="newUsername">Username</label>
        <input
          type="text"
          id="newUsername"
          name="newUsername"
          onChange={changeHandler}
        />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" onChange={changeHandler} />

        <label htmlFor="newPassword">Password</label>
        <input
          type="password"
          id="newPassword"
          name="password"
          onChange={changeHandler}
        />

        <label htmlFor="newPassword"> Conform Password</label>
        <input
          type="password"
          id="new-Password"
          name="confirmPassword"
          onChange={changeHandler}
        />

        <button className="btn-1" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
