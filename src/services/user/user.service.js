

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
    tagTypes: [tagType, "Client", "Epo"],
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => 'users/getAllUsers',
            providesTags: (result) => providesTagsHelper(result, tagType, "USER"),
        }),
        getAdmins: builder.query({
            query: () => 'users/getAllAdmins',
            providesTags: (result) => providesTagsHelper(result, tagType, "USER"),
        }),
        getSuperAdmins: builder.query({
            query: () => 'users/getAllSuperAdmins',
            providesTags: (result) => providesTagsHelper(result, tagType, "USER"),
        }),
        getUserByID: builder.query({
            query: (userID) => `user/${userID}`,
            providesTags: (result) => providesTagsHelperObject(result, tagType, "USER"),
        }),
        getUserProfile: builder.query({
            query: () => 'user/profile',
            providesTags: (result) => providesTagsHelperObject(result, tagType, "USER"),
        }),
        changePassword: builder.mutation({
            query: body => ({
                url: 'auth/changePassword',
                method: 'PATCH',
                body
            }),
            invalidatesTags: [{ type: 'User' }, { type: 'Client' }, { type: 'Epo' }],
        }),
        resetPassword: builder.mutation({
            query: body => ({
                url: 'auth/resetPassword',
                method: 'PATCH',
                body
            }),
            invalidatesTags: [{ type: 'User' }, { type: 'Client' }, { type: 'Epo' }],
        }),
        deleteUser: builder.mutation({
            query: userID => ({
                url: `user/removeUser/${userID}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: 'User' }, { type: 'Client' }],
        }),
        updateProfile: builder.mutation({
            query: values => ({
                url: `users/updateProfile/${values.email}`,
                method: 'PATCH',
                body: values.body
            }),
            invalidatesTags: ['Client', 'Epo', 'User'],
        }),
    })

})


export const { 
    useGetUsersQuery, 
    useGetUserByIDQuery, 
    useGetUserProfileQuery,
    useChangePasswordMutation,
    useResetPasswordMutation,
    useDeleteUserMutation,
    useUpdateProfileMutation,
    useGetAdminsQuery,
    useGetSuperAdminsQuery
} = usersApi




