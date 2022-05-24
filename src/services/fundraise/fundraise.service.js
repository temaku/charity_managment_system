

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
<<<<<<< HEAD
            query: () => '/v1/fundraises',
=======
            query: () => '/v1/fundraise',
>>>>>>> fe7008cdac84f8b12ed535f97fc5d1b1b123ad52
            providesTags: (result) => providesTagsHelper(result, tagType, "FUNDRAISE"),
        }),
       
        addFundraise: builder.mutation({
            query: body => ({
<<<<<<< HEAD
                url: '/v1/fundraises',
=======
                url: '/v1/fundraise',
>>>>>>> fe7008cdac84f8b12ed535f97fc5d1b1b123ad52
                method: 'POST',
                body
            }),
            invalidatesTags: [{ type: tagType }],
        }),
        
    })

})


export const { 
    useGetAllFundraisessQuery, 
    useAddFundraiseMutation,
} = fundraiseApi




