import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bouquets from "./reducers/bouquets";
import user from "./reducers/user";

const rootReducer = combineReducers({
  bouquets: bouquets,
  user: user,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
