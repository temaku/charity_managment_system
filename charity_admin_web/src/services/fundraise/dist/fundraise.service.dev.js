"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDeleteFundraiseMutation = exports.useUpdateFundraiseMutation = exports.useAddFundraiseMutation = exports.useGetAllFundraisessQuery = exports.fundraiseApi = void 0;

var _react = require("@reduxjs/toolkit/query/react");

var _common = require("../../common");

var _authHeader = require("../auth-header");

var _providesTagsHelper = require("../providesTagsHelper");

var tagType = "Fundraise";
var fundraiseApi = (0, _react.createApi)({
  reducerPath: "fundraiseApi",
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
      getAllFundraisess: builder.query({
        query: function query() {
          return '/v1/fundraises';
        },
        providesTags: function providesTags(result) {
          return (0, _providesTagsHelper.providesTagsHelper)(result, tagType, "FUNDRAISE");
        }
      }),
      addFundraise: builder.mutation({
        query: function query(body) {
          return {
            url: '/v1/fundraises',
            method: 'POST',
            body: body
          };
        },
        invalidatesTags: [{
          type: tagType
        }]
      }),
      updateFundraise: builder.mutation({
        query: function query(body) {
          return {
            url: "/v1/fundraises/".concat(body.id),
            method: 'PATCH',
            body: body
          };
        },
        invalidatesTags: [{
          type: tagType
        }]
      }),
      deleteFundraise: builder.mutation({
        query: function query(_ref2) {
          var fundraiseId = _ref2.fundraiseId;
          return {
            url: "/v1/fundraises/".concat(fundraiseId),
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
exports.fundraiseApi = fundraiseApi;
var useGetAllFundraisessQuery = fundraiseApi.useGetAllFundraisessQuery,
    useAddFundraiseMutation = fundraiseApi.useAddFundraiseMutation,
    useUpdateFundraiseMutation = fundraiseApi.useUpdateFundraiseMutation,
    useDeleteFundraiseMutation = fundraiseApi.useDeleteFundraiseMutation;
exports.useDeleteFundraiseMutation = useDeleteFundraiseMutation;
exports.useUpdateFundraiseMutation = useUpdateFundraiseMutation;
exports.useAddFundraiseMutation = useAddFundraiseMutation;
exports.useGetAllFundraisessQuery = useGetAllFundraisessQuery;