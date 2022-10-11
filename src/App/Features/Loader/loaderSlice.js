import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  appStarted: false,
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    loadingData: (state) => {
      state.loading = true;
    },
    notLoadingData: (state) => {
      state.loading = false;
    },
    appStarted: (state) => {
      state.appStarted = true;
    },
  },
});

export const { loadingData, notLoadingData, appStarted } = loadingSlice.actions;
export default loadingSlice.reducer;
