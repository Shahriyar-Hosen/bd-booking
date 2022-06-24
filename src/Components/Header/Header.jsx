import React from "react";
import { MdOutlineHotel, MdLocalTaxi } from "react-icons/md";
import { IoIosAirplane } from "react-icons/io";
import { AiFillCar } from "react-icons/ai";
import { RiHotelBedLine } from "react-icons/ri";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <MdOutlineHotel />
            Stays
          </div>
          <div className="headerListItem">
            <IoIosAirplane />
            Flights
          </div>
          <div className="headerListItem">
            <AiFillCar />
            Car Rentals
          </div>
          <div className="headerListItem">
            <RiHotelBedLine />
            Attractions
          </div>
          <div className="headerListItem">
            <MdLocalTaxi />
            Airport taxis
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
