import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_BASE_URL } from '../../common'
import { token } from '../auth-header'
import { providesTagsHelper, providesTagsHelperObject } from '../providesTagsHelper'

const tagType = "Budget"

export const budgetApi = createApi({
    reducerPath: "budgetApi",
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL, prepareHeaders: (headers, { getToken }) => {
            const _token = token()
            if (_token) {
                headers.set('Authorization', `Bearer ${_token}`)
            }
            return headers
        }
    }),
    tagTypes: [tagType],
    endpoints: (builder) => ({
        getAllBudgets: builder.query({
            query: () => '/v1/budget',
            providesTags: (result) => providesTagsHelper(result, tagType, "Budget"),
        }),
       
        addBudget: builder.mutation({
            query: body => ({
                url: '/v1/budget',
                method: 'POST',
                body
            }),
            invalidatesTags: [{ type: tagType }],
        }),
        updateBudget: builder.mutation({
            query: body => ({
                url: `/v1/budget/${body.id}`,
                method: 'PATCH',
                body
            }),
            invalidatesTags: [{ type: tagType }],
        }),
        deleteBudget: builder.mutation({
            query: ({budgetId}) => ({
                url: `/v1/budget/${budgetId}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: tagType }],
        }),
        
    })

})


export const { 
    useGetAllBudgetsQuery, 
    useAddBudgetMutation,
    useUpdateBudgetMutation,
    useDeleteBudgetMutation
} = budgetApi




