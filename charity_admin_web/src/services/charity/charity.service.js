import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_BASE_URL } from '../../common'
import { token } from '../auth-header'
import { providesTagsHelper, providesTagsHelperObject } from '../providesTagsHelper'

const tagType = "Charity"

export const charityApi = createApi({
    reducerPath: "charityApi",
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
        getAllCharities: builder.query({
            query: () => '/v1/charities',
            providesTags: (result) => providesTagsHelper(result, tagType, "CHARITY"),
        }),
       
        addCharity: builder.mutation({
            query: body => ({
                url: '/v1/charities',
                method: 'POST',
                body
            }),
            invalidatesTags: [{ type: tagType }],
        }),
        updateCharity: builder.mutation({
            query: body => ({
                url: `/v1/charities/${body.id}`,
                method: 'PATCH',
                body
            }),
            invalidatesTags: [{ type: tagType }],
        }),
        deleteCharity: builder.mutation({
            query: ({charityId}) => ({
                url: `/v1/charities/${charityId}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: tagType }],
        }),
    })

})


export const { 
    useGetAllCharitiesQuery, 
    useAddCharityMutation,
    useUpdateCharityMutation,
    useDeleteCharityMutation
} = charityApi




