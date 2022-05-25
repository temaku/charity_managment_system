
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import authReducer from '../features/authSlice'
import { charityApi } from '../services/charity/charity.service'
import { fundraiseApi } from '../services/fundraise/fundraise.service'
import { usersApi } from '../services/user/user.service'
import { donationApi } from '../services/donation/donation_service'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [charityApi.reducerPath]: charityApi.reducer,
        [fundraiseApi.reducerPath]: fundraiseApi.reducer,
        [donationApi.reducerPath]:donationApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        usersApi.middleware,
        charityApi.middleware,
        fundraiseApi.middleware,
        donationApi.middleware
    ])
})


// setupListeners(store.dispatch)


