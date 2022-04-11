import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { authReducer } from "./slices/auth";
import { contentsReducer } from "./slices/contents";
import { uiReducer } from "./slices/ui";
const reducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  contents: contentsReducer,
});

const store = configureStore({
  reducer: reducer,
});

export default store;
