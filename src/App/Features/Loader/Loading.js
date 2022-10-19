import React from "react";
import hsLogo from "../../../Images/hslogo.png";
const Loading = () => {
  return (
    <div className="loading__container">
      <p className="loading__txt">Loading</p>

      <img src={hsLogo} className="loading__img"></img>
    </div>
  );
};

export default Loading;
