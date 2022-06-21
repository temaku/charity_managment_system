

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_BASE_URL } from '../../common'
import { token } from '../auth-header'
import { providesTagsHelper, providesTagsHelperObject } from '../providesTagsHelper'

const tagType = "User"

export const usersApi = createApi({
    reducerPath: "usersApi",
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
        getAllUsers: builder.query({
            query: () => '/v1/users',
            providesTags: (result) => providesTagsHelper(result, tagType, "USER"),
        }),
       
        addUser: builder.mutation({
            query: body => ({
                url: '/v1/auth/signup',
                method: 'POST',
                body
            }),
            invalidatesTags: [{ type: tagType }],
        }),
        updateUser: builder.mutation({
            query: body => ({
                url: `/v1/users/${body.id}`,
                method: 'PATCH',
                body
            }),
            invalidatesTags: [{ type: tagType }],
        }),
        deleteUser: builder.mutation({
            query: ({userId}) => ({
                url: `/v1/users/${userId}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: tagType }],
        }),


        
    })

})


export const { 
    useGetAllUsersQuery, 
    useAddUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation
} = usersApi




