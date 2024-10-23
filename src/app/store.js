import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./slices/CartSlice";
import CatalogSlice from "./slices/CatalogSlice";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    catalog: CatalogSlice,
  },
});
