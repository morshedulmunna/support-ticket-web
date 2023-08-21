import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchQuery: (state, action) => {
      state.searchQuery === action.payload;
    },
  },
});

export const { searchQuery } = searchSlice.actions;

export default searchSlice.reducer;
