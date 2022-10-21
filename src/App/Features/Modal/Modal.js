import React from "react";
import { useSelector } from "react-redux";

const Modal = () => {
  const currentImage = useSelector((state) => state.cards.currentImg);
  const closeModal = function () {
    const modal = document.querySelector(".modal-container");
    modal.classList.remove("modal-open");
  };
  return (
    <div className="modal-container">
      <button onClick={closeModal} className="btn modal__btn">
        Close
      </button>
      <img src={currentImage} className="modal__img" alt="card"></img>
    </div>
  );
};

export default Modal;
