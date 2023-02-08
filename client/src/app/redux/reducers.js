// import { USER_LOG_IN } from "./types";
import { combineReducers, createSlice } from "@reduxjs/toolkit";

let INITIAL_STATE = {
  user: null,
  token: null,
};

let CART_INTIAL_STATE = {
  cart: [],
  price: 0,
};

const userSlice = createSlice({
  initialState: INITIAL_STATE,
  name: "user",
  reducers: {
    logIn: (state, action) => {
      state.user = action.payload;
      state.token = action.payload.id;
    },
  },
});

const cartSlice = createSlice({
  initialState: CART_INTIAL_STATE,
  name: "cart",
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
      state.price += action.payload.price;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export const { logIn } = userSlice.actions;
// export default userSlice.reducer;
export default combineReducers({
  user: userSlice.reducer,
  cart: cartSlice.reducer,
});
