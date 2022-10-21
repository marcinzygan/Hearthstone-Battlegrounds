import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
  currentImg: "",
  originalCardsState: [],
  favouritesList: [],
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setData: (state, data) => {
      //Filter out only cards with minion type

      const newState = data.payload
        .map((card, index) => {
          return { ...card, isFav: false };
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
        state.cards = [...filteredCards];
      } else {
        state.cards = state.originalCardsState;
        const filteredCards = state.cards.filter(
          (card) => card.race === data.payload
        );
        state.cards = [...filteredCards];
      }
    },
    setImg: (state, data) => {
      state.currentImg = data.payload;
    },
    setFavourite: (state, data, index) => {
      const id = data.payload;
      const newDisplayedCards = state.cards.map((card) => {
        if (card.cardId === id) {
          return { ...card, isFav: card.isFav === false ? true : false };
        }
        return { ...card };
      });

      const currentCard = state.cards.find((card) => card.cardId === id);

      state.favouritesList.push(currentCard);

      // console.log(current(state.favouritesList));
      // state.originalCardsState = [
      //   ...state.originalCardsState.filter((card) => card.cardId != id),
      //   ,
      //   currentCard,
      // ];
      state.cards = newDisplayedCards;

      const newOriginalCards = state.originalCardsState.map((card) => {
        if (card.cardId === id) {
          return { ...card, isFav: card.isFav === false ? true : false };
        }
        return { ...card };
      });
      state.originalCardsState = newOriginalCards;
    },
    removeFavourite: (state, data) => {
      // const id = data.payload;

      // const newFavList = state.favouritesList.filter(
      //   (card) => card.cardId != id
      // );
      // console.log(newFavList);
      const id = data.payload;
      const newCards = state.cards.map((card) => {
        if (card.cardId === id) {
          return { ...card, isFav: card.isFav === false ? true : false };
        }
        return { ...card };
      });

      state.originalCardsState = newCards;
      state.cards = newCards;
      console.log(id);

      // const currentCard = state.cards.find((card) => card.cardId === id);
      state.favouritesList = state.favouritesList.filter(
        (card) => card.cardId !== id
      );
    },
  },
});
export const { setData, setImg, filterData, setFavourite, removeFavourite } =
  cardsSlice.actions;
export default cardsSlice.reducer;
