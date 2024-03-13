import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "counter",
  initialState: 0,

  reducers: {
    add: (state, action) => {
      return state + parseInt(action.payload); // Parse the payload to an integer
    },
    remove: (state, action) => {
      return state - parseInt(action.payload); // Parse the payload to an integer
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
