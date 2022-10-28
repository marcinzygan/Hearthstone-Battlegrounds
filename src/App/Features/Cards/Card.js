import React from "react";
import { useDispatch } from "react-redux";
import { setImg, setFavourite, removeFavourite } from "./cardsSlice";
import { Icon } from "@iconify/react";
const Card = (card) => {
  const { cardId, name, text, img, race, isFav } = card;
  // MODAL

  const dispatch = useDispatch();
  const openModal = function (img) {
    const modal = document.querySelector(".modal-container");
    modal.classList.add("modal-open");
    dispatch(setImg(img));
  };
  const addToFavourite = function () {
    dispatch(setFavourite(cardId));
  };

  let newText;
  if (text) {
    newText = text
      .replace("[x]", "")
      .replaceAll("_", "")
      .replace("(@ Gold left!)", "");
  }

  return (
    <div className="card">
      <h1 className="card-name">{name}</h1>

      <img
        src={img}
        alt={name}
        className="card-img"
        onClick={() => openModal(img)}
      />

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
      <div className="card-buttons">
        <button className="btn ">
          {!isFav ? (
            <Icon
              icon="fa-solid:heart"
              onClick={() => addToFavourite(cardId)}
            />
          ) : (
            <Icon
              icon="fa-solid:heart-broken"
              onClick={() => dispatch(removeFavourite(cardId))}
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default Card;
