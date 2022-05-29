
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import authReducer from '../features/authSlice'
import { charityApi } from '../services/charity/charity.service'
import { fundraiseApi } from '../services/fundraise/fundraise.service'
import { usersApi } from '../services/user/user.service'
import { donationApi } from '../services/donation/donation_service'
import {eventApi} from '../services/events/events_service'
import {fundDonationApi} from '../services/fundraise_donation/fundraisedonateService'
import { taskApi } from '../services/task/task_service'
import { reportApi } from '../services/reports/report_service'
import { registerEventApi } from '../services/register_event/register_event_service'
import { budgetApi } from '../services/budget/budget_service'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [charityApi.reducerPath]: charityApi.reducer,
        [fundraiseApi.reducerPath]: fundraiseApi.reducer,
        [donationApi.reducerPath]:donationApi.reducer,
        [eventApi.reducerPath]:eventApi.reducer,
        [fundDonationApi.reducerPath]:fundDonationApi.reducer,
        [taskApi.reducerPath]:taskApi.reducer,
        [reportApi.reducerPath]:reportApi.reducer,
        [registerEventApi.reducerPath]:registerEventApi.reducer,
        [budgetApi.reducerPath]:budgetApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        usersApi.middleware,
        charityApi.middleware,
        fundraiseApi.middleware,
        donationApi.middleware,
        eventApi.middleware,
        fundDonationApi.middleware,
        taskApi.middleware,
        reportApi.middleware,
        registerEventApi.middleware,
        budgetApi.middleware

    ])
})


// setupListeners(store.dispatch)


