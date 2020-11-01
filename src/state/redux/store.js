import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import storage from "redux-persist/lib/storage";
import { persistStore, persistCombineReducers } from "redux-persist";

import { Auth } from "./reducers/auth";

const config = {
  key: "root",
  version: 1,
  storage: storage,
};
export const store = createStore(
  persistCombineReducers(config, {
    auth: Auth,
  }),
  applyMiddleware(thunk)
);
export const persistor = persistStore(store);
