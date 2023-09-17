import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypeBouquet, Bouquet } from "../../types/types";

type State = {
  isOpened: boolean;
};

const initialState: State = {
  isOpened: false,
};

const basketModal = createSlice({
  name: "basketModal",
  initialState: initialState,
  reducers: {
    setIsOpened: (state, action: PayloadAction<boolean>) => {
      state.isOpened = action.payload;
    },
  },
});

export const actions = basketModal.actions;
export default basketModal.reducer;
