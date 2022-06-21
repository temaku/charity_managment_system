"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDeleteCharityMutation = exports.useUpdateCharityMutation = exports.useAddCharityMutation = exports.useGetAllCharitiesQuery = exports.charityApi = void 0;

var _react = require("@reduxjs/toolkit/query/react");

var _common = require("../../common");

var _authHeader = require("../auth-header");

var _providesTagsHelper = require("../providesTagsHelper");

var tagType = "Charity";
var charityApi = (0, _react.createApi)({
  reducerPath: "charityApi",
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
      getAllCharities: builder.query({
        query: function query() {
          return '/v1/charities';
        },
        providesTags: function providesTags(result) {
          return (0, _providesTagsHelper.providesTagsHelper)(result, tagType, "CHARITY");
        }
      }),
      addCharity: builder.mutation({
        query: function query(body) {
          return {
            url: '/v1/charities',
            method: 'POST',
            body: body
          };
        },
        invalidatesTags: [{
          type: tagType
        }]
      }),
      updateCharity: builder.mutation({
        query: function query(body) {
          return {
            url: "/v1/charities/".concat(body.id),
            method: 'PATCH',
            body: body
          };
        },
        invalidatesTags: [{
          type: tagType
        }]
      }),
      deleteCharity: builder.mutation({
        query: function query(_ref2) {
          var charityId = _ref2.charityId;
          return {
            url: "/v1/charities/".concat(charityId),
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
exports.charityApi = charityApi;
var useGetAllCharitiesQuery = charityApi.useGetAllCharitiesQuery,
    useAddCharityMutation = charityApi.useAddCharityMutation,
    useUpdateCharityMutation = charityApi.useUpdateCharityMutation,
    useDeleteCharityMutation = charityApi.useDeleteCharityMutation;
exports.useDeleteCharityMutation = useDeleteCharityMutation;
exports.useUpdateCharityMutation = useUpdateCharityMutation;
exports.useAddCharityMutation = useAddCharityMutation;
exports.useGetAllCharitiesQuery = useGetAllCharitiesQuery;