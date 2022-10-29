import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFavListOpened: false,
  isImgOpened: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, data) => {
      const modal = document.querySelector(".modal-container");
      modal.classList.add("modal-open");
    },
    closeModal: (state, data) => {
      const modal = document.querySelector(".modal-container");
      modal.classList.remove("modal-open");
    },
    isFavListOpened: (state, data) => {
      state.isFavListOpened = data.payload;
    },
    isImgOpened: (state, data) => {
      state.isImgOpened = data.payload;
    },
  },
});

export const { openModal, closeModal, isFavListOpened, isImgOpened } =
  modalSlice.actions;
export default modalSlice.reducer;
