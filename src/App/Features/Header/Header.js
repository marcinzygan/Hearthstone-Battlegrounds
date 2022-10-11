import React from "react";
import hsLogo from "../../../Images/hslogo.png";
import { useSelector, useDispatch } from "react-redux";

const Header = ({ callAPI }) => {
  const appStarted = useSelector((state) => state.loader.appStarted);
  console.log(appStarted);

  return (
    <div className="header">
      <div className="header-background"></div>
      <div className="header__menu-container">
        {!appStarted && (
          <button className="btn start-btn" onClick={() => callAPI()}>
            Start
          </button>
        )}
        {appStarted && (
          <>
            <button className="btn start-btn">First Page</button>
            <button className="btn start-btn">Last Page</button>
          </>
        )}
        <img src={hsLogo} alt="hearthstone logo" className="logo" />
        <button className="btn">About</button>
      </div>
    </div>
  );
};

export default Header;
