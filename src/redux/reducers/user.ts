import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypeBouquet, Bouquet, UserType } from "../../types/types";

type State = {
  user: UserType;
};

const initialState: State = {
  user: "user",
};

const userReducer = createSlice({
  name: "userReducer",
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
  },
});

export const actions = userReducer.actions;
export default userReducer.reducer;
