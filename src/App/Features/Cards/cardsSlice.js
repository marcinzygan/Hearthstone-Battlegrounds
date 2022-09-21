import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setData: (state, data) => {
      state.cards = data.payload;
    },
  },
});
export const { setData } = cardsSlice.actions;
export default cardsSlice.reducer;
