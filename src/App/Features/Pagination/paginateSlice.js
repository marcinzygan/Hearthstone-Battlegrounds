import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageNumber: 0,
};

const paginateSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.pageNumber += 1;
    },
  },
});

export default paginateSlice.reducer;
export const { nextPage } = paginateSlice.actions;
