import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const CartSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cartItems.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    deleteAllItems: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addItem, deleteItem, deleteAllItems } = CartSlice.actions;

export default CartSlice.reducer;
