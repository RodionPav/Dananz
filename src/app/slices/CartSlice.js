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
      state.cartItems.pop(action.payload);
    },
  },
});

export const { addItem, deleteItem } = CartSlice.actions;

export default CartSlice.reducer;
