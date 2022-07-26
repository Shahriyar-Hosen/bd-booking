import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init.js";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });

  //   const { loading, error, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(credentials);
    // dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);

      //   dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      // navigate("/");
    } catch (err) {
      //   dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="login">
      <div className="lContainer">
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
        {/* disabled={loading} */}
        <button onClick={handleClick} className="lButton">
          Login
        </button>
        {/* {error && <span>{error.message}</span>} */}
      </div>
    </div>
  );
};

export default Login;
