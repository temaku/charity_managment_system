"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDeleteRegisterEventMutation = exports.useUpdateRegisterEventMutation = exports.useGetAllRegistrationQuery = exports.registerEventApi = void 0;

var _react = require("@reduxjs/toolkit/query/react");

var _common = require("../../common");

var _authHeader = require("../auth-header");

var _providesTagsHelper = require("../providesTagsHelper");

var tagType = "RegisterEvent";
var registerEventApi = (0, _react.createApi)({
  reducerPath: "registerEventApi",
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
      getAllRegistration: builder.query({
        query: function query() {
          return '/v1/register';
        },
        providesTags: function providesTags(result) {
          return (0, _providesTagsHelper.providesTagsHelper)(result, tagType, "Register Event");
        }
      }),
      updateRegisterEvent: builder.mutation({
        query: function query(body) {
          return {
            url: "/v1/register/".concat(body.id),
            method: 'PATCH',
            body: body
          };
        },
        invalidatesTags: [{
          type: tagType
        }]
      }),
      deleteRegisterEvent: builder.mutation({
        query: function query(_ref2) {
          var registerId = _ref2.registerId;
          return {
            url: "/v1/register/".concat(registerId),
            method: 'DELETE'
          };
        },
        invalidatesTags: [{
          type: tagType
        }]
      }) // addCharity: builder.mutation({
      //     query: body => ({
      //         url: '/v1/charities',
      //         method: 'POST',
      //         body
      //     }),
      //     invalidatesTags: [{ type: tagType }],
      // }),

    };
  }
});
exports.registerEventApi = registerEventApi;
var useGetAllRegistrationQuery = registerEventApi.useGetAllRegistrationQuery,
    useUpdateRegisterEventMutation = registerEventApi.useUpdateRegisterEventMutation,
    useDeleteRegisterEventMutation = registerEventApi.useDeleteRegisterEventMutation;
exports.useDeleteRegisterEventMutation = useDeleteRegisterEventMutation;
exports.useUpdateRegisterEventMutation = useUpdateRegisterEventMutation;
exports.useGetAllRegistrationQuery = useGetAllRegistrationQuery;