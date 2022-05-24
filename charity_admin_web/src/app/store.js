
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import authReducer from '../features/authSlice'
import { charityApi } from '../services/charity/charity.service'
import { fundraiseApi } from '../services/fundraise/fundraise.service'
import { usersApi } from '../services/user/user.service'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [charityApi.reducerPath]: charityApi.reducer,
        [fundraiseApi.reducerPath]: fundraiseApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        usersApi.middleware,
        charityApi.middleware,
        fundraiseApi.middleware
    ])
})


// setupListeners(store.dispatch)


