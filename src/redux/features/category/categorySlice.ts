import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    openCategoryForm: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { openCategoryForm } = categorySlice.actions;

export default categorySlice.reducer;
