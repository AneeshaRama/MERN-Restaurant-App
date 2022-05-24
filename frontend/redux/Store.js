import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import foodReducer from "./slices/foodSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    food: foodReducer,
  },
});
