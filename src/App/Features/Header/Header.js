import React from "react";
import hsLogo from "../../../Images/hslogo.png";
import murlocSound from "../../../Sounds/murloc.mp3";
import { useSelector, useDispatch } from "react-redux";
import { filterData } from "../Cards/cardsSlice";
const Header = () => {
  const appStarted = useSelector((state) => state.loader.appStarted);
  const dispatch = useDispatch();
  const handleChange = function (e) {
    e.preventDefault();
    let { name, value } = e.target;
    console.log(name, value);
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
              <option value="Deamon">Deamon</option>
            </select>
            <button
              className="btn start-btn"
              onClick={() => dispatch(filterData("Murloc"))}
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
