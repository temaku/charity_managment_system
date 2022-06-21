"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDeleteDonateFundMutation = exports.useUpdateDonateFundMutation = exports.useGetAllFundrasingQuery = exports.fundDonationApi = void 0;

var _react = require("@reduxjs/toolkit/query/react");

var _common = require("../../common");

var _authHeader = require("../auth-header");

var _providesTagsHelper = require("../providesTagsHelper");

var tagType = "Fundraise Donation";
var fundDonationApi = (0, _react.createApi)({
  reducerPath: "fundDonationApi",
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
      getAllFundrasing: builder.query({
        query: function query() {
          return '/v1/donateFund';
        },
        providesTags: function providesTags(result) {
          return (0, _providesTagsHelper.providesTagsHelper)(result, tagType, "Fundraie Donation");
        }
      }),
      updateDonateFund: builder.mutation({
        query: function query(body) {
          return {
            url: "/v1/donateFund/".concat(body.id),
            method: 'PATCH',
            body: body
          };
        },
        invalidatesTags: [{
          type: tagType
        }]
      }),
      deleteDonateFund: builder.mutation({
        query: function query(_ref2) {
          var donateId = _ref2.donateId;
          return {
            url: "/v1/donateFund/".concat(donateId),
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
exports.fundDonationApi = fundDonationApi;
var useGetAllFundrasingQuery = fundDonationApi.useGetAllFundrasingQuery,
    useUpdateDonateFundMutation = fundDonationApi.useUpdateDonateFundMutation,
    useDeleteDonateFundMutation = fundDonationApi.useDeleteDonateFundMutation;
exports.useDeleteDonateFundMutation = useDeleteDonateFundMutation;
exports.useUpdateDonateFundMutation = useUpdateDonateFundMutation;
exports.useGetAllFundrasingQuery = useGetAllFundrasingQuery;