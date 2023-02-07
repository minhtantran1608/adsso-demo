// import { USER_LOG_IN } from "./types";
import { createSlice } from "@reduxjs/toolkit";

let INITIAL_STATE = {
  user: null,
  token: null,
};

const userSlice = createSlice({
  initialState: INITIAL_STATE,
  name: "user",
  reducers: {
    logIn: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
});

export const { logIn } = userSlice.actions;
export default userSlice.reducer;
