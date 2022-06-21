"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDeleteDonationMutation = exports.useUpdateDonationMutation = exports.useGetAllDonationsQuery = exports.donationApi = void 0;

var _react = require("@reduxjs/toolkit/query/react");

var _common = require("../../common");

var _authHeader = require("../auth-header");

var _providesTagsHelper = require("../providesTagsHelper");

var tagType = "Donation";
var donationApi = (0, _react.createApi)({
  reducerPath: "donationApi",
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
      getAllDonations: builder.query({
        query: function query() {
          return '/v1/donations';
        },
        providesTags: function providesTags(result) {
          return (0, _providesTagsHelper.providesTagsHelper)(result, tagType, "DONATION");
        }
      }),
      updateDonation: builder.mutation({
        query: function query(body) {
          return {
            url: "/v1/donations/".concat(body.id),
            method: 'PATCH',
            body: body
          };
        },
        invalidatesTags: [{
          type: tagType
        }]
      }),
      deleteDonation: builder.mutation({
        query: function query(_ref2) {
          var donationId = _ref2.donationId;
          return {
            url: "/v1/donations/".concat(donationId),
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
exports.donationApi = donationApi;
var useGetAllDonationsQuery = donationApi.useGetAllDonationsQuery,
    useUpdateDonationMutation = donationApi.useUpdateDonationMutation,
    useDeleteDonationMutation = donationApi.useDeleteDonationMutation;
exports.useDeleteDonationMutation = useDeleteDonationMutation;
exports.useUpdateDonationMutation = useUpdateDonationMutation;
exports.useGetAllDonationsQuery = useGetAllDonationsQuery;