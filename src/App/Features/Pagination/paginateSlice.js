import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageNumber: 1,
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
  },
});

export default paginateSlice.reducer;
export const { nextPage, prevPage } = paginateSlice.actions;
