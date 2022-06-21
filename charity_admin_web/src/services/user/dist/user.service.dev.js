"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDeleteUserMutation = exports.useUpdateUserMutation = exports.useAddUserMutation = exports.useGetAllUsersQuery = exports.usersApi = void 0;

var _react = require("@reduxjs/toolkit/query/react");

var _common = require("../../common");

var _authHeader = require("../auth-header");

var _providesTagsHelper = require("../providesTagsHelper");

var tagType = "User";
var usersApi = (0, _react.createApi)({
  reducerPath: "usersApi",
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
      getAllUsers: builder.query({
        query: function query() {
          return '/v1/users';
        },
        providesTags: function providesTags(result) {
          return (0, _providesTagsHelper.providesTagsHelper)(result, tagType, "USER");
        }
      }),
      addUser: builder.mutation({
        query: function query(body) {
          return {
            url: '/v1/auth/signup',
            method: 'POST',
            body: body
          };
        },
        invalidatesTags: [{
          type: tagType
        }]
      }),
      updateUser: builder.mutation({
        query: function query(body) {
          return {
            url: "/v1/users/".concat(body.id),
            method: 'PATCH',
            body: body
          };
        },
        invalidatesTags: [{
          type: tagType
        }]
      }),
      deleteUser: builder.mutation({
        query: function query(_ref2) {
          var userId = _ref2.userId;
          return {
            url: "/v1/users/".concat(userId),
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
exports.usersApi = usersApi;
var useGetAllUsersQuery = usersApi.useGetAllUsersQuery,
    useAddUserMutation = usersApi.useAddUserMutation,
    useUpdateUserMutation = usersApi.useUpdateUserMutation,
    useDeleteUserMutation = usersApi.useDeleteUserMutation;
exports.useDeleteUserMutation = useDeleteUserMutation;
exports.useUpdateUserMutation = useUpdateUserMutation;
exports.useAddUserMutation = useAddUserMutation;
exports.useGetAllUsersQuery = useGetAllUsersQuery;