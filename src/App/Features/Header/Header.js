import React from "react";
import { useState } from "react";
import hsLogo from "../../../Images/hslogo.png";
import { useSelector, useDispatch } from "react-redux";
import { setPage } from "../Pagination/paginateSlice";
import { filterData } from "../Cards/cardsSlice";
import { openModal } from "../Modal/modalSlice";
import { Icon } from "@iconify/react";
import FavoriteList from "../Favourites/FavoriteList";
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
          <div className="favourites__container">
            <button className="btn">
              <Icon
                icon="fa-solid:heart"
                onClick={() => dispatch(openModal())}
              />
            </button>
          </div>
        )}
        <img src={hsLogo} alt="hearthstone logo" className="logo" />
        {appStarted && (
          <div className="filter__container">
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
              <option value="Elemental">Elemental</option>
              <option value="none">none</option>
            </select>
            <button className="btn" onClick={() => dispatch(filterOptions)}>
              Filter
            </button>
            {/* <button className="btn start-btn">Last Page</button> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
