"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDeleteTaskMutation = exports.useUpdateTaskMutation = exports.useAddTaskMutation = exports.useGetAllTasksQuery = exports.taskApi = void 0;

var _react = require("@reduxjs/toolkit/query/react");

var _common = require("../../common");

var _authHeader = require("../auth-header");

var _providesTagsHelper = require("../providesTagsHelper");

var tagType = "Task";
var taskApi = (0, _react.createApi)({
  reducerPath: "taskApi",
  baseQuery: (0, _react.fetchBaseQuery)({
    baseUrl: _common.API_BASE_URL,
    prepareHeaders: function prepareHeaders(headers, _ref) {
      var getToken = _ref.getToken;

      var _token = (0, _authHeader.token)();

      if (_token) {
        headers.set('Authorization', "Bearer ".concat(_token));
      }

      return headers;
    }
  }),
  tagTypes: [tagType],
  endpoints: function endpoints(builder) {
    return {
      getAllTasks: builder.query({
        query: function query() {
          return '/v1/tasks';
        },
        providesTags: function providesTags(result) {
          return (0, _providesTagsHelper.providesTagsHelper)(result, tagType, "Task");
        }
      }),
      addTask: builder.mutation({
        query: function query(body) {
          return {
            url: '/v1/tasks',
            method: 'POST',
            body: body
          };
        },
        invalidatesTags: [{
          type: tagType
        }]
      }),
      updateTask: builder.mutation({
        query: function query(body) {
          return {
            url: "/v1/tasks/".concat(body.id),
            method: 'PATCH',
            body: body
          };
        },
        invalidatesTags: [{
          type: tagType
        }]
      }),
      deleteTask: builder.mutation({
        query: function query(_ref2) {
          var taskId = _ref2.taskId;
          return {
            url: "/v1/tasks/".concat(taskId),
            method: 'DELETE'
          };
        },
        invalidatesTags: [{
          type: tagType
        }]
      })
    };
  }
});
exports.taskApi = taskApi;
var useGetAllTasksQuery = taskApi.useGetAllTasksQuery,
    useAddTaskMutation = taskApi.useAddTaskMutation,
    useUpdateTaskMutation = taskApi.useUpdateTaskMutation,
    useDeleteTaskMutation = taskApi.useDeleteTaskMutation;
exports.useDeleteTaskMutation = useDeleteTaskMutation;
exports.useUpdateTaskMutation = useUpdateTaskMutation;
exports.useAddTaskMutation = useAddTaskMutation;
exports.useGetAllTasksQuery = useGetAllTasksQuery;