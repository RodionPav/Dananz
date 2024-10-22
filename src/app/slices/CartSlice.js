import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const CartSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (state.cartItems.find((obj) => obj.id === action.payload.id)) {
        state.cartItems.forEach((obj) => {
          obj.id === action.payload.id ? (obj.amount += 1) : obj;
        });
      } else {
        state.cartItems.push(action.payload);
        state.cartItems.forEach((obj) => {
          obj.id === action.payload.id ? (obj.amount = 1) : obj;
        });
      }
    },
    deleteItem: (state, action) => {
      if (action.payload.amount !== 1) {
        console.log(action.payload);
        state.cartItems.forEach((obj) => {
          obj.id === action.payload.id ? (obj.amount -= 1) : obj;
        });
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
    deleteAllItems: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { addItem, deleteItem, deleteAllItems } = CartSlice.actions;

export default CartSlice.reducer;
