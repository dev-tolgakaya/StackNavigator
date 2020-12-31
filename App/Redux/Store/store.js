import {applyMiddleware, createStore} from 'redux';
import rootReducer from "../Reducers";
import {persistStore, persistReducer} from "redux-persist";
import {createLogger} from "redux-logger/src";
import AsyncStorage from '@react-native-community/async-storage'


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['todos']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export  const store = createStore(
    persistedReducer, applyMiddleware(createLogger())
);
export const persistedStore = persistStore(store)
