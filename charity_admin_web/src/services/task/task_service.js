import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_BASE_URL } from '../../common'
import { token } from '../auth-header'
import { providesTagsHelper, providesTagsHelperObject } from '../providesTagsHelper'

const tagType = "Task"

export const taskApi = createApi({
    reducerPath: "taskApi",
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
        getAllTasks: builder.query({
            query: () => '/v1/tasks',
            providesTags: (result) => providesTagsHelper(result, tagType, "Task"),
        }),
       
        addTask: builder.mutation({
            query: body => ({
                url: '/v1/tasks',
                method: 'POST',
                body
            }),
            invalidatesTags: [{ type: tagType }],
        }),
        updateTask: builder.mutation({
            query: body => ({
                url: `/v1/tasks/${body.id}`,
                method: 'PATCH',
                body
            }),
            invalidatesTags: [{ type: tagType }],
        }),
        deleteTask: builder.mutation({
            query: ({taskId}) => ({
                url: `/v1/tasks/${taskId}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: tagType }],
        }),
        
    })

})


export const { 
    useGetAllTasksQuery, 
    useAddTaskMutation,
    useUpdateTaskMutation,
    useDeleteTaskMutation
} = taskApi




