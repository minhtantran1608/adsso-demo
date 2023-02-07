import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducers from "./reducers";

const middlewares = [thunk];

export const store = configureStore({
  reducer: reducers,
  middleware: middlewares,
});
