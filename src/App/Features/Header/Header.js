import React from "react";
import hsLogo from "../../../Images/hslogo.png";
import murlocSound from "../../../Sounds/murloc.mp3";
import { useSelector } from "react-redux";

const Header = () => {
  const appStarted = useSelector((state) => state.loader.appStarted);

  return (
    <div className="header">
      <div className="header-background"></div>
      <div className="header__menu-container">
        {/* {appStarted && (
          <>
            <button className="btn start-btn">First Page</button>
            <button className="btn start-btn">Last Page</button>
          </>
        )} */}
        <img src={hsLogo} alt="hearthstone logo" className="logo" />
      </div>
    </div>
  );
};

export default Header;
