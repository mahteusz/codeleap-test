import { createStore } from "redux";
import reducers from "./reducers"
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['thought']
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = createStore(persistedReducer, {})

export const persistor = persistStore(store)

export default store