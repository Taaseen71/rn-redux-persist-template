import { configureStore } from "@reduxjs/toolkit";
import {createLogger} from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';

import persistStore from 'redux-persist/lib/persistStore';
import reducers from 'src/features/reducers';


const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

let persistConfig = {key: 'root', storage: AsyncStorage};
let rootReducer = combineReducers(reducers);

let persistedReducer = persistReducer(persistConfig, rootReducer);

const logger = createLogger({
    predicate: () => isDebuggingInChrome,
    collapsed: true,
    duration: true,
    diff: true,
})

// export default configureStore({
//     reducer: {
//         counter: counterReducer,
//         user: userReducer
//     },
//     middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
// })

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({ 
        serializableCheck: false,
    }).concat(logger)
})

export const persistor = persistStore(store);