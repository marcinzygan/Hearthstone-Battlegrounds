import React from "react";
import hsLogo from "../../../Images/hslogo.png";
const Header = () => {
  return (
    <div className="header">
      <div className="header-background"></div>
      <div className="header__menu-container">
        <button className="btn">Start</button>
        <img src={hsLogo} alt="hearthstone logo" className="logo" />
        <button className="btn">About</button>
      </div>
    </div>
  );
};

export default Header;
