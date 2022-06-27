import React from "react";
import Featured from "../../Components/Featured/Featured";
import FeaturedProperties from "../../Components/FeaturedProperties/FeaturedProperties";
import Header from "../../Components/Header/Header";
import MailList from "../../Components/MailList/MailList";
import Navbar from "../../Components/Navbar/Navbar";
import PropertyList from "../../Components/PropertyList/PropertyList";
import "./Home.css";

const Home = () => {
  return (
    <section>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
      </div>
    </section>
  );
};

export default Home;
