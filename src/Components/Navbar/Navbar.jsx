import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nabContainer">
        <span className="logo">BD Booking!</span>
        <div className="nabItems">
          <button className="nabButton">Register</button>
          <button className="nabButton">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
