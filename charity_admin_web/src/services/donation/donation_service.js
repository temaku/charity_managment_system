import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_BASE_URL } from '../../common'
import { token } from '../auth-header'
import { providesTagsHelper, providesTagsHelperObject } from '../providesTagsHelper'

const tagType = "Donation"

export const donationApi = createApi({
    reducerPath: "donationApi",
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
        getAllDonations: builder.query({
            query: () => '/v1/donations',
            providesTags: (result) => providesTagsHelper(result, tagType, "DONATION"),
        }),
       
        updateDonation: builder.mutation({
            query: body => ({
                url: `/v1/donations/${body.id}`,
                method: 'PATCH',
                body
            }),
            invalidatesTags: [{ type: tagType }],
        }),
        deleteDonation: builder.mutation({
            query: ({donationId}) => ({
                url: `/v1/donations/${donationId}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: tagType }],
        }),
        
    })

})


export const { 
    useGetAllDonationsQuery,
    useUpdateDonationMutation,
    useDeleteDonationMutation
} = donationApi




