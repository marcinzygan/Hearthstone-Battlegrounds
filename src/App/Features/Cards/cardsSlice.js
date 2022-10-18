import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
  currentImg: "",
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setData: (state, data) => {
      //Filter out only cards with minion type
      const newState = data.payload
        .map((card, index) => {
          return card;
        })
        .filter((card) => card.img && card.type === "Minion");
      console.log(newState);
      // Filter out duplicate cards
      const noDuplicates = newState.filter(
        (value, index, self) =>
          index === self.findIndex((card) => card.name === value.name)
      );
      console.log(noDuplicates);
      // Create copy of an array and sort it alphabetically
      const sortedAlphabetically = [...noDuplicates].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      console.log(sortedAlphabetically);
      // Set new state
      state.cards = sortedAlphabetically;
    },
    setImg: (state, data) => {
      state.currentImg = data.payload;
    },
  },
});
export const { setData, setImg } = cardsSlice.actions;
export default cardsSlice.reducer;
