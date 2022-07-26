import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init.js";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

import "./Login.css";

const Login = () => {
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });

  const [signInWithEmailAndPassword, user, authLoading, authError] =
    useSignInWithEmailAndPassword(auth);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  console.log("credentials: ", credentials);


  const handleClick = async (e) => {
    e.preventDefault();
    try {
      signInWithEmailAndPassword(e.target.email.value, e.target.password.value);
      console.log(user);
      const res = await axios.post("/auth/login", credentials);
      console.log(res);
      if (res.status === 200) {
        localStorage.setItem("user", JSON.stringify(res.data.details));
      }
      //   dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      // navigate("/");
    } catch (err) {
      setError(err);
      //   dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  console.log("err:", error);

  return (
    <div className="login">
      <form onSubmit={handleClick} className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button
          type="submit"
          disabled={loading}
          onClick={handleClick}
          className="lButton"
        >
          Login
        </button>
        {error && <span>{error.message}</span>}
      </form>
    </div>
  );
};

export default Login;
