import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init.js";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

import "./Login.css";

const Login = () => {
  const [error, setError] = useState([]);
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });

  const [signInWithEmailAndPassword, user, loading, authError] =
    useSignInWithEmailAndPassword(auth);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  if (authError) {
    authError(authError);
  }

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      signInWithEmailAndPassword(e.target.email.value, e.target.password.value);
      console.log("user: ", user);
      if (user) {
        const res = await axios.post("/auth/login", credentials);
        console.log(res);
        if (res.status === 200) {
          console.log("LOGIN_SUCCESS");
          localStorage.setItem("user", JSON.stringify(res.data.details));
          navigate("/");
        }
      }
    } catch (err) {
      console.log("err:", err);
      setError(err);
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleClick} className="lContainer">
        <h2 className="title">BD Booking</h2>
        <input
          type="text"
          placeholder="username"
          name="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          id="email"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button type="submit" disabled={loading} className="lButton">
          Login
        </button>
        <div className="user">
          Don't have an account?{" "}
          <Link to="/register" className="">
            Sign up
          </Link>
        </div>
        {error && <span>{error.message}</span>}
      </form>
    </div>
  );
};

export default Login;
