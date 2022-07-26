import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init.js";
import "./Navbar.css";

const Navbar = () => {
  const [user] = useAuthState(auth);
  let username =
    JSON.parse(localStorage.getItem("user")).username || "user Name";

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">BD Booking!</span>
        </Link>
        {user ? (
          <span>
            {username}
            <button onClick={() => signOut(auth)} className="navButton">
              Logout
            </button>
          </span>
        ) : (
          <div className="navItems">
            <Link to="/register">
              <button className="navButton">Register</button>
            </Link>
            <Link to="/login">
              <button className="navButton">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
