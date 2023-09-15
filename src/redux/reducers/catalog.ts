import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { maxListItems } from "../../constant";
import { TypeBouquet, Bouquet } from "../../types/types";
import { actions as actionsBouquets } from "./bouquets";
type State = {
  type: string;
  name: string;
  lower_price: number;
  upper_price: number;
  max_length: number;
  isLoading?: boolean;
};

const initialState: State = {
  type: "",
  name: "",
  lower_price: 0,
  upper_price: 0,
  max_length: maxListItems,
  isLoading: true,
};

const catalogReducer = createSlice({
  name: "catalogReducer",
  initialState: initialState,
  reducers: {
    setType: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setLowerPrice: (state, action: PayloadAction<number>) => {
      state.lower_price = action.payload;
    },
    setUpperPrice: (state, action: PayloadAction<number>) => {
      state.upper_price = action.payload;
    },
    increaseMaxLength: (state) => {
      state.max_length = state.max_length + maxListItems;
    },
    setFilterParams: (
      state,
      action: PayloadAction<Omit<State, "bouquets" | "max_length">>
    ) => {
      state.type = action.payload.type;
      state.name = action.payload.name;
      state.lower_price = action.payload.lower_price;
      state.upper_price = action.payload.upper_price;
      state.max_length = maxListItems;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actionsBouquets.setBouquets.type, (state) => {
      state.isLoading = false;
    });
  },
});

export const actions = catalogReducer.actions;
export default catalogReducer.reducer;
