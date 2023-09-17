import { configureStore } from '@reduxjs/toolkit'

import GlobalStateReducer from '../reducers/GlobalState'

import storage from 'redux-persist/lib/storage';
 
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import {combineReducers} from "redux"; 


const persistConfig = {
    key: 'root',
    storage: storage,
}
// combine reducers slices 
const Reducers = combineReducers({
    GlobalState: GlobalStateReducer,
})

const persistedReducer = persistReducer(persistConfig, Reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});

export const persistor = persistStore(store);