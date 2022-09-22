import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageNumber: 1,
};

const paginateSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.pageNumber += 1;
    },
    prevPage: (state) => {
      if (state.pageNumber <= 1) {
        return;
      }
      state.pageNumber -= 1;
    },
  },
});

export default paginateSlice.reducer;
export const { nextPage, prevPage } = paginateSlice.actions;
