import {configureStore} from '@reduxjs/toolkit'
import {pollutionApi} from "./http/pollutionApi";

export const store = configureStore({
    reducer: {
        [pollutionApi.reducerPath]: pollutionApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pollutionApi.middleware),
})