import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  catalogItems: [],
  loading: false,
  error: "",
};

export const axiosCatalog = createAsyncThunk(
  "catalog/axiosCatalog",
  async () => {
    const response = await axios.get(
      "https://6715287a33bc2bfe40b99410.mockapi.io/dananz/items"
    );
    return response.data;
  }
);

export const CatalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(axiosCatalog.pending, (state) => {
        state.error = "";
        state.loading = true;
      })
      .addCase(axiosCatalog.fulfilled, (state, action) => {
        state.catalogItems = action.payload;
        state.loading = false;
      })
      .addCase(axiosCatalog.rejected, (state) => {
        state.error = "ERROR";
        state.loading = false;
      });
  },
});

export const { addItem, deleteItem, deleteAllItem } = CatalogSlice.actions;

export default CatalogSlice.reducer;
