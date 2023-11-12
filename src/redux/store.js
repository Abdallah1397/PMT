import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./user";

// Root Reducer that contains all reducers
const rootReducer = combineReducers({
  user: userReducer,
});
// We will use Redux Persist to persist the Redux state across page reloads or app restarts.
// Redux Persist Configurations
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};
// Persisted Reducer :  returns a new reducer that, when used to create the Redux store, will automatically handle persisting and rehydrating the state.
const persistedReducer = persistReducer(persistConfig, rootReducer);
// Store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
// Persistor: takes the store and returns persistor obj
// The persistor object has a purge method that can be used to clear the persisted state
export const persistor = persistStore(store);
