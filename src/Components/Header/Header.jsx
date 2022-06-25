import { AiFillCar } from "react-icons/ai";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GiPerson } from "react-icons/gi";
import { IoIosAirplane } from "react-icons/io";
import { MdLocalTaxi, MdOutlineHotel } from "react-icons/md";
import { RiHotelBedLine } from "react-icons/ri";
import "./Header.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { useState } from "react";

const Header = () => {
  const [searchDate, setSearchDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <MdOutlineHotel />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <IoIosAirplane />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <AiFillCar />
            <span>Car Rentals</span>
          </div>
          <div className="headerListItem">
            <RiHotelBedLine />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <MdLocalTaxi />
            <span>Airport taxis</span>
          </div>
        </div>
        <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
        <p className="headerDesc">
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free BD Booking account{" "}
        </p>
        <button className="headerBtn">Sign in / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <MdOutlineHotel className="headerIcon" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem">
            <FaRegCalendarAlt className="headerIcon" />
            <span className="headerSearchText">{`data to date`}</span>
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setSearchDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={searchDate}
            />
          </div>
          <div className="headerSearchItem">
            <GiPerson className="headerIcon" />
            <span className="headerSearchText">{`1 adults 0 children 1 room`}</span>
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
