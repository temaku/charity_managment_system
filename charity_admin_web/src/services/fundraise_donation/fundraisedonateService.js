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
       
        // addCharity: builder.mutation({
        //     query: body => ({
        //         url: '/v1/charities',
        //         method: 'POST',
        //         body
        //     }),
        //     invalidatesTags: [{ type: tagType }],
        // }),
        
    })

})


export const { 
    useGetAllFundrasingQuery
  
} = fundDonationApi




