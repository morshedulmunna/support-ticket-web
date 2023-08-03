import { createSlice } from "@reduxjs/toolkit";

export type authStateType = {
  accessToken: undefined | string;
  user:
    | {
        email: string;
        name: string;
        roll: string;
        subject: string;
      }
    | undefined;
};

const initialState = {
  accessToken: undefined,
  user: undefined,
} as authStateType;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    },
    logOut: (state) => {
      localStorage.removeItem("@logged");
      state.accessToken = undefined;
      state.user = undefined;
    },
  },
});

export const { login, logOut } = authSlice.actions;

export default authSlice.reducer;
