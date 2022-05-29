import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_BASE_URL } from '../../common'
import { token } from '../auth-header'
import { providesTagsHelper, providesTagsHelperObject } from '../providesTagsHelper'

const tagType = "Report"

export const reportApi = createApi({
    reducerPath: "reportApi",
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
        getAllReports: builder.query({
            query: () => '/v1/reports',
            providesTags: (result) => providesTagsHelper(result, tagType, "Report"),
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
    useGetAllReportsQuery
  
} = reportApi




