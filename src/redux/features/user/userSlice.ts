import { createSlice } from "@reduxjs/toolkit";

export type TInitialState = {
  user: object | null;
  token: object | null;
};

const initialState: TInitialState = {
  user: null,
  token: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});


export const userReducer = userSlice.reducer;
