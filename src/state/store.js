import { configureStore } from '@reduxjs/toolkit';
import { myReducers } from './combineReducers';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import expireIn from 'redux-persist-transform-expire-in';

const expirationKey = 'VAWAUFLENCE';

const persistConfig = {
    key: 'jk;bcbscvxcb',
    version: 1,
    storage,
    setTimeout: 1000,
    transforms: [expireIn(6000 * 60 * 60, expirationKey, [])],
};

const persistedReducer = persistReducer(persistConfig, myReducers);

export const store = configureStore({
    reducer: {
        reducer: persistedReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});
