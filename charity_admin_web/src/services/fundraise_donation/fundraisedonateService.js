import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_BASE_URL } from '../../common'
import { token } from '../auth-header'
import { providesTagsHelper, providesTagsHelperObject } from '../providesTagsHelper'

const tagType = "Fundraise Donation"

export const fundDonationApi = createApi({
    reducerPath: "fundDonationApi",
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
        getAllFundrasing: builder.query({
            query: () => '/v1/donateFund',
            providesTags: (result) => providesTagsHelper(result, tagType, "Fundraie Donation"),
        }),
        updateDonateFund: builder.mutation({
            query: body => ({
                url: `/v1/donateFund/${body.id}`,
                method: 'PATCH',
                body
            }),
            invalidatesTags: [{ type: tagType }],
        }),
        deleteDonateFund: builder.mutation({
            query: ({donationId}) => ({
                url: `/v1/donateFund/${donationId}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: tagType }],
        }),

       
      
        
    })

})


export const { 
    useGetAllFundrasingQuery,
    useUpdateDonateFundMutation,
    useDeleteDonateFundMutation

  
} = fundDonationApi




