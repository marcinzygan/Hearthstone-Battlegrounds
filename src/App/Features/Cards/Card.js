import React from "react";

const Card = (card) => {
  const { name, text, img, type, cardSet } = card;

  return (
    <div className="card">
      <h1>{name}</h1>
      <img src={img} alt={name} />

      <>{type}</>
    </div>
  );
};

export default Card;
