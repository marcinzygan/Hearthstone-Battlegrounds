import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setImg } from "../Cards/cardsSlice";
const Modal = () => {
  const dispatch = useDispatch();
  const currentImage = useSelector((state) => state.cards.currentImg);
  const closeModal = function () {
    const modal = document.querySelector(".modal-container");
    modal.classList.remove("modal-open");
    dispatch(setImg(""));
  };
  return (
    <div className="modal-container">
      <button onClick={closeModal} className="btn modal__btn">
        Close
      </button>
      {currentImage && (
        <img src={currentImage} className="modal__img" alt="card"></img>
      )}
    </div>
  );
};

export default Modal;
