import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./Features/loadingSlice";
export const store = configureStore({
  reducer: {
    loader: loadingReducer,
  },
});
