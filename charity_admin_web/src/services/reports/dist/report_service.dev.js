"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDeleteReportMutation = exports.useUpdateReportMutation = exports.useGetAllReportsQuery = exports.reportApi = void 0;

var _react = require("@reduxjs/toolkit/query/react");

var _common = require("../../common");

var _authHeader = require("../auth-header");

var _providesTagsHelper = require("../providesTagsHelper");

var tagType = "Report";
var reportApi = (0, _react.createApi)({
  reducerPath: "reportApi",
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
      getAllReports: builder.query({
        query: function query() {
          return '/v1/reports';
        },
        providesTags: function providesTags(result) {
          return (0, _providesTagsHelper.providesTagsHelper)(result, tagType, "Report");
        }
      }),
      updateReport: builder.mutation({
        query: function query(body) {
          return {
            url: "/v1/reports/".concat(body.id),
            method: 'PATCH',
            body: body
          };
        },
        invalidatesTags: [{
          type: tagType
        }]
      }),
      deleteReport: builder.mutation({
        query: function query(_ref2) {
          var reportId = _ref2.reportId;
          return {
            url: "/v1/reports/".concat(reportId),
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
exports.reportApi = reportApi;
var useGetAllReportsQuery = reportApi.useGetAllReportsQuery,
    useUpdateReportMutation = reportApi.useUpdateReportMutation,
    useDeleteReportMutation = reportApi.useDeleteReportMutation;
exports.useDeleteReportMutation = useDeleteReportMutation;
exports.useUpdateReportMutation = useUpdateReportMutation;
exports.useGetAllReportsQuery = useGetAllReportsQuery;