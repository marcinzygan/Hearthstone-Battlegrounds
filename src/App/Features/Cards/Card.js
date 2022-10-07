import React from "react";

const Card = (card) => {
  const { name, text, img, type, cardSet, cardId, race } = card;

  // const textCleaned = text
  //   .replace("[x]", "")
  //   .replaceAll("_", "")
  //   .replace("(@ Gold left!)", "");
  let newText;
  if (text) {
    newText = text
      .replace("[x]", "")
      .replaceAll("_", "")
      .replace("(@ Gold left!)", "");
    // text.includes("[x]" || "_" || "(@ Gold left!)") === true
    //   ? text
    //       .replace("[x]", "")
    //       .replaceAll("_", "")
    //       .replace("(@ Gold left!)", "")
    //   : text;
  }

  return (
    <div className="card">
      <h1 className="card-name">{name}</h1>
      <img src={img} alt={name} className="card-img" />
      <div className="card-details">
        <div className="card-race">
          <span className="race-span">Race:</span>
          {!race ? ` none` : ` ${race}`}
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: newText }}
          className="card-text"
        />
      </div>
    </div>
  );
};

export default Card;
