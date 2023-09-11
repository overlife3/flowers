import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypeBouquet, Bouquet } from "../../types/types";

type State = {
  types: TypeBouquet[];
  bouquets: Bouquet[];
};

const initialState: State = {
  types: [],
  bouquets: [],
};

const bouquetsReducer = createSlice({
  name: "bouquetsReducer",
  initialState: initialState,
  reducers: {
    setTypes: (state, action: PayloadAction<TypeBouquet[]>) => {
      state.types = action.payload;
    },
    setBouquets: (state, action: PayloadAction<Bouquet[]>) => {
      state.bouquets = action.payload;
    },
  },
});

export const actions = bouquetsReducer.actions;
export default bouquetsReducer.reducer;
