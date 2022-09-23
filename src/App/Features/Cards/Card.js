import React from "react";

const Card = (card) => {
  const { name, text, img, type, cardSet } = card;
  if (!img) {
    return;
  }

  return (
    <>
      <h1>{name}</h1>
      <img src={img} alt={name} />
      <p>{text}</p>
      <p>{type}</p>
    </>
  );
};

export default Card;
