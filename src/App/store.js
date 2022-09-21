import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./Features/Loader/loaderSlice";
import cardsReducer from "./Features/Cards/cardsSlice";
export const store = configureStore({
  reducer: {
    loader: loaderReducer,
    cards: cardsReducer,
  },
});
