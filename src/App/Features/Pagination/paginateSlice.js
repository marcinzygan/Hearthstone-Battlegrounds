import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageNumber: 1,
  showPagination: false,
};

const paginateSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    nextPage: (state, data) => {
      console.log(data.payload);

      if (state.pageNumber >= data.payload) {
        return;
      }
      state.pageNumber += 1;
      window.scrollTo(0, 0);
    },
    prevPage: (state) => {
      if (state.pageNumber <= 1) {
        return;
      }
      state.pageNumber -= 1;
      window.scrollTo(0, 0);
    },
    showPagination: (state) => {
      state.showPagination = true;
    },
  },
});

export default paginateSlice.reducer;
export const { nextPage, prevPage, showPagination } = paginateSlice.actions;
