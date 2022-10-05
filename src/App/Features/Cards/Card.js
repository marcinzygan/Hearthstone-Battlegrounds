import React from "react";

const Card = (card) => {
  const { name, text, img, type, cardSet, cardId } = card;
  const textCleaned = text
    .replace("[x]", "")
    .replaceAll("_", "")
    .replace("(@ Gold left!)", "");
  return (
    <div className="card">
      <h1>{name}</h1>
      <img src={img} alt={name} className="card-img" />

      {/* <>{type}</> */}
      <div dangerouslySetInnerHTML={{ __html: textCleaned }} />
    </div>
  );
};

export default Card;
