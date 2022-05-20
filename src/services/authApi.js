
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_BASE_URL } from '../common'


export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL,
    }),
    tagTypes: ['Auth'],
    endpoints: (builder) => ({
        login: builder.mutation({
            query: userData => ({
                url: 'auth/login',
                method: 'POST',
                body: userData
            }),
            invalidatesTags: [{ type: 'Auth' }],

        }),
        logout: builder.query({
            query: () => {
                localStorage.removeItem("currentUser");
            }
        })
    })
})


export const { useLoginMutation, useLogoutQuery } = authApi





