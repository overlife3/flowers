import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import {
  TypeBouquet,
  Bouquet,
  UserType,
  BouquetOrder,
} from "../../types/types";

type State = {
  bouquets_order: { [key: string]: BouquetOrder };
};

const initialState: State = {
  bouquets_order: {},
};

const basketReducer = createSlice({
  name: "basketReducer",
  initialState: initialState,
  reducers: {
    addBouquetOrder: (state, action: PayloadAction<BouquetOrder>) => {
      state.bouquets_order = {
        ...state.bouquets_order,
        [nanoid()]: action.payload,
      };
    },
    incCount: (state, action: PayloadAction<string>) => {
      const order = state.bouquets_order;
      const key = action.payload;
      if (order[key]) {
        const count = order[key].count;
        order[key].count = count + 1;
      } else {
        console.error("Такой заказ не найден");
      }
    },
    decCount: (state, action: PayloadAction<string>) => {
      const order = state.bouquets_order;
      const key = action.payload;
      if (order[key]) {
        const count = order[key].count;
        order[key].count = count - 1;
      } else {
        console.error("Такой заказ не найден");
      }
    },
    removeBouquetOrder: (state, action: PayloadAction<string>) => {
      const order = state.bouquets_order;
      const key = action.payload;
      if (order[key]) {
        const { [key]: _, ...newOrder } = order;
        state.bouquets_order = newOrder;
      } else {
        console.error("Такой заказ не найден");
      }
    },
  },
});

export const actions = basketReducer.actions;
export default basketReducer.reducer;
