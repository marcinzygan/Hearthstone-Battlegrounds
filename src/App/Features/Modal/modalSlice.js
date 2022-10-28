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
    closeModal: (state, data) => {},
  },
});

export const { openModal } = modalSlice.actions;
export default modalSlice.reducer;
