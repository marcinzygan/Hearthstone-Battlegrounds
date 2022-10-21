import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCardFavourite: false,
  favouriteList: [],
};

const favouriteSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    setFav: (state, data) => {
      console.log("hello");
    },
  },
});

export const {} = favouriteSlice.actions;
export default favouriteSlice.reducer;
