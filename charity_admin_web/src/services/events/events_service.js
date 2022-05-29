import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_BASE_URL } from '../../common'
import { token } from '../auth-header'
import { providesTagsHelper, providesTagsHelperObject } from '../providesTagsHelper'

const tagType = "Event"

export const eventApi = createApi({
    reducerPath: "eventApi",
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
        getAllEvents: builder.query({
            query: () => '/v1/events',
            providesTags: (result) => providesTagsHelper(result, tagType, "Event"),
        }),
       
        addEvent: builder.mutation({
            query: body => ({
                url: '/v1/events',
                method: 'POST',
                body
            }),
            invalidatesTags: [{ type: tagType }],
        }),
        
    })

})


export const { 
    useGetAllEventsQuery, 
    useAddEventMutation,
} = eventApi




