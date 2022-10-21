import React from "react";
import murlocSound from "../../../Sounds/murloc.mp3";
import { useSelector } from "react-redux";

const Welcome = ({ callAPI }) => {
  const appStarted = useSelector((state) => state.loader.appStarted);
  console.log(appStarted);
  const startButton = function () {
    const murloc = new Audio(murlocSound);

    murloc.play();
    callAPI();
  };

  return (
    <div className="welcome-screen">
      <h1 className="welcome__h1">Welcome my friend !</h1>
      <div className="welcome__txt-container">
        {" "}
        <p className="welcome__txt">
          In this application you can browse and learn all avaiable hearthstone
          battlegrounds cards.
        </p>
        <p className="welcome__txt">
          Just click start button and happy learning !
        </p>
      </div>
      {!appStarted && (
        <div className="hs-wrapper gold" onClick={() => startButton()}>
          <div className="hs-button gold">
            <span className="hs-border gold">
              <span className="hs-text gold">Start</span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Welcome;
