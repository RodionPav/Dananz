import { useDispatch } from "react-redux";
import { addItem } from "../app/slices/CartSlice";
import React from "react";

export function useCatalogItem(obj) {
  const dispatch = useDispatch();
  return dispatch(addItem(obj));
}
