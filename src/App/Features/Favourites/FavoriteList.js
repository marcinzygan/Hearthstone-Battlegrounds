import React from "react";
import { useSelector } from "react-redux";

const FavoriteList = () => {
  const favList = useSelector((state) => state.cards.favoriteList);
  const favCards = favList.map((card) => {
    return <h1>{card.name}</h1>;
  });
  return <div>{favCards}</div>;
};

export default FavoriteList;
