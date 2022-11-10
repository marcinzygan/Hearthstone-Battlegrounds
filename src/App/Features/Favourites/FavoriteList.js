import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "@iconify/react";
import { setFavourite, removeFavourite } from "../Cards/cardsSlice";
const FavoriteList = () => {
  const dispatch = useDispatch();
  const favList = useSelector((state) => state.cards.favoriteList);

  const favCards = favList.map((card) => {
    let newText;
    if (card.text) {
      newText = card.text
        .replace("[x]", "")
        .replaceAll("_", "")
        .replace("(@ Gold left!)", "");
    }
    return (
      <div key={card.cardId} className="favorite__card">
        <h1 className="card-name">{card.name}</h1>
        <img className="card-img" src={card.img} alt={card.name} />
        <div className="card-details">
          <div className="card-race">
            <span className="race-span">Race:</span>
            {!card.race ? ` none` : ` ${card.race}`}
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: newText }}
            className="card-text"
          />
        </div>
        <div className="card-buttons">
          <button className="btn ">
            {!card.isFav ? (
              <Icon
                className="fav__icon "
                icon="fa6-solid:heart-circle-plus"
                onClick={() => dispatch(setFavourite(card.cardId))}
              />
            ) : (
              <Icon
                className="fav__icon "
                icon="fa6-solid:heart-circle-minus"
                onClick={() => dispatch(removeFavourite(card.cardId))}
              />
            )}
          </button>
        </div>
      </div>
    );
  });
  return <div className="favorites__container">{favCards}</div>;
};

export default FavoriteList;
