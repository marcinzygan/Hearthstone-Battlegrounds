import React from "react";
import murlocSound from "../../../Sounds/murloc.mp3";
import { useSelector, useDispatch } from "react-redux";

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
      <p className="welcome__txt">
        in this application you can browse and learn all avaiable hearthstone
        battlegrounds cards.
      </p>
      <p>Just click start button and happy learning !</p>
      {!appStarted && (
        <button className="btn start-btn" onClick={() => startButton()}>
          Start
        </button>
      )}
    </div>
  );
};

export default Welcome;
