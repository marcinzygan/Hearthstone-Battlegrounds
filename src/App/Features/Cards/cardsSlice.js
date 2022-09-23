import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setData: (state, data) => {
      const newState = data.payload
        .map((card, index) => {
          return card;
        })
        .filter((card) => card.img && card.type === "Minion");
      console.log(newState);

      const noDuplicates = newState.filter(
        (value, index, self) =>
          index === self.findIndex((card) => card.name === value.name)
      );
      console.log(noDuplicates);

      state.cards = noDuplicates;
    },
  },
});
export const { setData } = cardsSlice.actions;
export default cardsSlice.reducer;
