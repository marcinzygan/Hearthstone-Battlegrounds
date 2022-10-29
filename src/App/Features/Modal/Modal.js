import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setImg } from "../Cards/cardsSlice";
import FavoriteList from "../Favourites/FavoriteList";
import { closeModal, isFavListOpened, isImgOpened } from "./modalSlice";

const Modal = () => {
  const dispatch = useDispatch();
  const currentImage = useSelector((state) => state.cards.currentImg);
  const isFavList = useSelector((state) => state.modal.isFavListOpened);
  const CloseModal = function () {
    dispatch(closeModal());
    dispatch(isImgOpened(false));
    dispatch(isFavListOpened(false));
    dispatch(setImg(""));
  };
  return (
    <div className="modal-container">
      <button onClick={() => CloseModal()} className="btn modal__btn">
        Close
      </button>
      {isFavList && <FavoriteList />}
      {currentImage && (
        <img src={currentImage} className="modal__img" alt="card"></img>
      )}
    </div>
  );
};

export default Modal;
