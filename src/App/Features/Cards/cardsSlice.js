import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
  currentImg: "",
  originalCardsState: [],
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

      // Set new state
      state.cards = sortedAlphabetically;
      //Set original state for filterOptions
      state.originalCardsState = sortedAlphabetically;
    },
    filterData: (state, data) => {
      // console.log(current(state.cards));
      // state.originalState = [...state.cards];
      // const newState = state.originalState;
      // console.log(newState);

      if (data.payload === "All") {
        state.cards = state.originalCardsState;
      } else if (data.payload === "none") {
        state.cards = state.originalCardsState;
        const filteredCards = state.cards.filter((card) => !card.race);
        state.cards = filteredCards;
      } else {
        state.cards = state.originalCardsState;
        const filteredCards = state.cards.filter(
          (card) => card.race === data.payload
        );
        state.cards = filteredCards;
      }
    },
    setImg: (state, data) => {
      state.currentImg = data.payload;
    },
  },
});
export const { setData, setImg, filterData } = cardsSlice.actions;
export default cardsSlice.reducer;
