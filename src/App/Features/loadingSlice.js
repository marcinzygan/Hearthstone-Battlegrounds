import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
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
  },
});

export const { loadingData, notLoadingData } = loadingSlice.actions;
export default loadingSlice.reducer;
