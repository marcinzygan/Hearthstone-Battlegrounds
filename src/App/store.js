import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./Features/Loader/loaderSlice";
import cardsReducer from "./Features/Cards/cardsSlice";
import paginateReducer from "./Features/Pagination/paginateSlice";
import modalReducer from "./Features/Modal/modalSlice";

export const store = configureStore({
  reducer: {
    loader: loaderReducer,
    cards: cardsReducer,
    page: paginateReducer,
    modal: modalReducer,
  },
});
