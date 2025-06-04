import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  initialized: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCarts: (state, action) => {
      state.items = action.payload;
      state.initialized = true;
    },
    addToCart: (state, action) => {
      const newItem = action.payload;
      const exists = state.items.find((item) => item.id === newItem.id);
      if (!exists) {
        state.items.push(newItem);
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
      state.initialized = false;
    },
  },
});

export const { setCarts, addToCart, removeFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
