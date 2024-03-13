import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    total: cartReducer,
  },
});

export default store;
