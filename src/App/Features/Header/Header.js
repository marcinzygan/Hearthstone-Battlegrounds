import React from "react";
import hsLogo from "../../../Images/hslogo.png";
import murlocSound from "../../../Sounds/murloc.mp3";
import { useSelector, useDispatch } from "react-redux";
import { setPage } from "../Pagination/paginateSlice";
import { filterData } from "../Cards/cardsSlice";
import { useState } from "react";

const Header = () => {
  const appStarted = useSelector((state) => state.loader.appStarted);

  const dispatch = useDispatch();

  const [filterOption, setFilterOption] = useState("All");
  const handleChange = function (e) {
    e.preventDefault();
    let { name, value } = e.target;
    console.log(name, value);

    setFilterOption(value);
    console.log(filterOption);
  };
  const filterOptions = function () {
    dispatch(setPage(1));
    dispatch(filterData(filterOption));
  };
  return (
    <div className="header">
      <div className="header-background"></div>
      <div className="header__menu-container">
        {appStarted && (
          <>
            <select onChange={handleChange}>
              <option value="All">All</option>
              <option value="Murloc">Murloc</option>
              <option value="Pirate">Pirate</option>
              <option value="Naga">Naga</option>
              <option value="Demon">Demon</option>
              <option value="Quilboar">Quilboar</option>
              <option value="Dragon">Dragon</option>
              <option value="Beast">Beast</option>
              <option value="Mech">Mech</option>
              <option value="none">none</option>
            </select>
            <button
              className="btn start-btn"
              onClick={() => dispatch(filterOptions)}
            >
              Filter
            </button>
            <button className="btn start-btn">Last Page</button>
          </>
        )}
        <img src={hsLogo} alt="hearthstone logo" className="logo" />
      </div>
    </div>
  );
};

export default Header;
