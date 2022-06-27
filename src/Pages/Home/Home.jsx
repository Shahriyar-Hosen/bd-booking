import React from "react";
import Featured from "../../Components/Featured/Featured";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <section>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <Featured />
      </div>
    </section>
  );
};

export default Home;
