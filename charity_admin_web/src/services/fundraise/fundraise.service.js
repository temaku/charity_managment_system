

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_BASE_URL } from '../../common'
import { token } from '../auth-header'
import { providesTagsHelper, providesTagsHelperObject } from '../providesTagsHelper'

const tagType = "Fundraise"

export const fundraiseApi = createApi({
    reducerPath: "fundraiseApi",
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
        getAllFundraisess: builder.query({
            query: () => '/v1/fundraises',
            providesTags: (result) => providesTagsHelper(result, tagType, "FUNDRAISE"),
        }),
       
        addFundraise: builder.mutation({
            query: body => ({
                url: '/v1/fundraises',
                method: 'POST',
                body
            }),
            invalidatesTags: [{ type: tagType }],
        }),

        updateFundraise: builder.mutation({
            query: body => ({
                url: `/v1/fundraises/${body.id}`,
                method: 'PATCH',
                body
            }),
            invalidatesTags: [{ type: tagType }],
        }),
        deleteFundraise: builder.mutation({
            query: ({fundId}) => ({
                url: `/v1/fundraises/${fundId}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: tagType }],
        }),
        
    })

})


export const { 
    useGetAllFundraisessQuery, 
    useAddFundraiseMutation,
    useUpdateFundraiseMutation,
    useDeleteFundraiseMutation
} = fundraiseApi




