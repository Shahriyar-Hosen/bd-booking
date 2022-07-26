import axios from "axios";
import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init.js";

const Register = () => {
  const [error, setError] = useState([]);
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });

  const [createUserWithEmailAndPassword, user, loading, authError] =
    useCreateUserWithEmailAndPassword(auth);

  if (authError) {
    setError(authError);
  }

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      createUserWithEmailAndPassword(
        e.target.email.value,
        e.target.password.value
      );
      console.log("user: ", user);
      if (user) {
        const res = await axios.post("/auth/register", credentials);
        console.log("res: ", res);
        if (res.status === 200) {
          localStorage.setItem("user", JSON.stringify(res.data.details));
          console.log("SIGN_UP_SUCCESS");
          navigate("/");
        }
      }
    } catch (err) {
      setError(err);
      console.log("err:", err);
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleClick} className="lContainer">
        <h2 className="title">BD Booking</h2>
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
        <button type="submit" disabled={loading} className="lButton">
          Sign Up
        </button>
        <div className="user">
          Already have an account?{" "}
          <Link to="/login" className="">
            Sign up
          </Link>
        </div>
        {error && <span>{error.message}</span>}
      </form>
    </div>
  );
};

export default Register;
