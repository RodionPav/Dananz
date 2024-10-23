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

          console.log(state.amount);
        });
      } else {
        const cloneAction = structuredClone(action.payload);
        state.cartItems.push(cloneAction);
        state.cartItems.forEach((obj) => {
          obj.id === cloneAction.id ? (obj.amount = 1) : obj;
        });
        state.amount++;
        console.log(state.amount);
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
    deleteAllItems: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.amount -= action.payload.amount;
      console.log(state.amount);
    },
  },
});

export const { addItem, deleteItem, deleteAllItems } = CartSlice.actions;

export default CartSlice.reducer;
