import { combineReducers, configureStore } from "@reduxjs/toolkit";
import basket from "./reducers/basket";
import basketModal from "./reducers/basketModal";
import bouquets from "./reducers/bouquets";
import catalog from "./reducers/catalog";
import user from "./reducers/user";

const rootReducer = combineReducers({
  bouquets: bouquets,
  user: user,
  catalog: catalog,
  basket: basket,
  basketModal: basketModal,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
