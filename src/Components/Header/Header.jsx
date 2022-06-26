import { AiFillCar } from "react-icons/ai";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GiPerson } from "react-icons/gi";
import { IoIosAirplane } from "react-icons/io";
import { MdLocalTaxi, MdOutlineHotel } from "react-icons/md";
import { RiHotelBedLine } from "react-icons/ri";
import "./Header.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import { format } from "date-fns";

const Header = ({type}) => {
  const [openDate, setOpenDate] = useState(false);
  const [openOption, setOpenOption] = useState(false);
  const [searchDate, setSearchDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [option, setOption] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOption((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? option[name] + 1 : option[name] - 1,
      };
    });
  };

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
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="headerDesc">
              Get rewarded for your travels - unlock instant savings of 10% or
              more with a free BD Booking account{" "}
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
                <span
                  className="headerSearchText"
                  onClick={() => {
                    setOpenDate(!openDate);
                  }}
                >{`${format(searchDate[0].startDate, "dd/MM/yyyy")} to ${format(
                  searchDate[0].endDate,
                  "dd/MM/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setSearchDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={searchDate}
                    className="searchDate"
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <GiPerson className="headerIcon" />
                <span
                  onClick={() => setOpenOption(!openOption)}
                  className="headerSearchText"
                >{`${option.adult} adults · ${option.children} children · ${option.room} room`}</span>
                {openOption && (
                  <>
                    <div className="options">
                      <div className="optionItems">
                        <span className="optionText">adult</span>
                        <div className="optionCounter">
                          <button
                            className="optionCounterBtn"
                            disabled={option.adult <= 1}
                            onClick={() => handleOption("adult", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">{`${option.adult}`}</span>
                          <button
                            className="optionCounterBtn"
                            onClick={() => handleOption("adult", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="optionItems">
                        <span className="optionText">children</span>
                        <div className="optionCounter">
                          <button
                            className="optionCounterBtn"
                            disabled={option.children <= 0}
                            onClick={() => handleOption("children", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">{`${option.children}`}</span>
                          <button
                            className="optionCounterBtn"
                            onClick={() => handleOption("children", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="optionItems">
                        <span className="optionText">room</span>
                        <div className="optionCounter">
                          <button
                            className="optionCounterBtn"
                            disabled={option.room <= 1}
                            onClick={() => handleOption("room", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">{` ${option.room}`}</span>
                          <button
                            className="optionCounterBtn"
                            onClick={() => handleOption("room", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn">Search</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
