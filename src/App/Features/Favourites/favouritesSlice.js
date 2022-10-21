import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCardFavourite: false,
  favouriteList: [],
};

const favouriteSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {},
});

export const {} = favouriteSlice.actions;
export default favouriteSlice.reducer;
