import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 0,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (state.cartItems.find((obj) => obj.id === action.payload.id)) {
        state.cartItems.forEach((obj) => {
          obj.id === action.payload.id ? (obj.amount++, state.amount++) : obj;
        });
      } else {
        const cloneAction = structuredClone(action.payload);
        state.cartItems.push(cloneAction);
        state.cartItems.forEach((obj) => {
          obj.id === cloneAction.id ? (obj.amount = 1) : obj;
        });
        state.amount++;
      }
    },
    deleteItem: (state, action) => {
      if (action.payload.amount !== 1) {
        state.cartItems.forEach((obj) => {
          obj.id === action.payload.id ? (obj.amount--, state.amount--) : obj;
        });
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.amount--;
      }
    },
    deleteAllItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.amount -= action.payload.amount;
    },
  },
});

export const { addItem, deleteItem, deleteAllItem } = CartSlice.actions;

export default CartSlice.reducer;
