import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
  currentImg: "",
  originalCardsState: [],
  favoriteList: JSON.parse(localStorage.getItem("Favorites")) || [],
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

      //Check if there is any Favourites cards and update the isFav to true
      const findFavState = state.originalCardsState.map((item) =>
        state.favoriteList.find((card) => card.cardId === item.cardId)
          ? { ...item, isFav: true }
          : item
      );

      // Set new state with updated isFav properties
      state.cards = findFavState;
    },
    setFavList: (state, data) => {
      state.favoriteList = data.payload;
    },
    //FILTER DATA FEATURE

    filterData: (state, data) => {
      //Check if there is any Favourites cards and update the isFav to true
      const findFavState = state.originalCardsState.map((item) =>
        state.favoriteList.find((card) => card.cardId === item.cardId)
          ? { ...item, isFav: true }
          : item
      );
      if (data.payload === "All") {
        state.cards = findFavState;
      } else if (data.payload === "none") {
        state.cards = findFavState;
        const filteredCards = state.cards.filter((card) => !card.race);
        state.cards = [...filteredCards];
      } else {
        state.cards = findFavState;
        const filteredCards = state.cards.filter(
          (card) => card.race === data.payload
        );
        state.cards = [...filteredCards];
      }
    },
    //SET IMAGE URL  FEATURE
    setImg: (state, data) => {
      state.currentImg = data.payload;
    },
    //ADD CARD TO FAVOURITES
    setFavourite: (state, data, index) => {
      const id = data.payload;
      // Find the current card in state , copy its properties , and set isFav to true
      const newDisplayedCards = state.cards.map((card) => {
        if (card.cardId === id) {
          return { ...card, isFav: card.isFav === false ? true : false };
        }
        return { ...card };
      });
      //Find current card in state.cards and add it to favoriteList

      // Display updated state
      state.cards = newDisplayedCards;
      const currentCard = state.cards.find((card) => card.cardId === id);
      state.favoriteList.push(currentCard);
      //Find current card in originalState , copy its properties and change isFav to true
      const newOriginalCards = state.originalCardsState.map((card) => {
        if (card.cardId === id) {
          return { ...card, isFav: card.isFav === false ? true : false };
        }
        return { ...card };
      });
      //Set new originalState
      state.originalCardsState = newOriginalCards;
    },
    //REMOVE CARD FROM FAVOURITES
    removeFavourite: (state, data) => {
      const id = data.payload;
      // Find current card in cardsState , copy its properties and change isFav to false
      const newDisplayedCards = state.cards.map((card) => {
        if (card.cardId === id) {
          return { ...card, isFav: card.isFav === false ? true : false };
        }
        return { ...card };
      });
      //Set new cards state to diplay cards
      state.cards = newDisplayedCards;

      //Set new original State

      // const currentCard = state.cards.find((card) => card.cardId === id);
      // const newOriginalState = (state.originalCardsState = [
      //   ...state.originalCardsState.filter((card) => card.cardId !== id),
      // ]);
      // state.originalCardsState = [...newOriginalState, currentCard];

      const newOriginalState = state.originalCardsState.map((card) => {
        if (card.cardId === id) {
          return { ...card, isFav: card.isFav === false ? true : false };
        }
        return { ...card };
      });
      state.originalCardsState = newOriginalState;

      //Filter out the current card from Favourites list
      state.favoriteList = state.favoriteList.filter(
        (card) => card.cardId !== id
      );
    },
  },
});
export const {
  setData,
  setImg,
  filterData,
  setFavourite,
  removeFavourite,
  setFavList,
} = cardsSlice.actions;
export default cardsSlice.reducer;
