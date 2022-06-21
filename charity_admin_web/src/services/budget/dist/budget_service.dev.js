"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDeleteBudgetMutation = exports.useUpdateBudgetMutation = exports.useAddBudgetMutation = exports.useGetAllBudgetsQuery = exports.budgetApi = void 0;

var _react = require("@reduxjs/toolkit/query/react");

var _common = require("../../common");

var _authHeader = require("../auth-header");

var _providesTagsHelper = require("../providesTagsHelper");

var tagType = "Budget";
var budgetApi = (0, _react.createApi)({
  reducerPath: "budgetApi",
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
      getAllBudgets: builder.query({
        query: function query() {
          return '/v1/budget';
        },
        providesTags: function providesTags(result) {
          return (0, _providesTagsHelper.providesTagsHelper)(result, tagType, "Budget");
        }
      }),
      addBudget: builder.mutation({
        query: function query(body) {
          return {
            url: '/v1/budget',
            method: 'POST',
            body: body
          };
        },
        invalidatesTags: [{
          type: tagType
        }]
      }),
      updateBudget: builder.mutation({
        query: function query(body) {
          return {
            url: "/v1/budget/".concat(body.id),
            method: 'PATCH',
            body: body
          };
        },
        invalidatesTags: [{
          type: tagType
        }]
      }),
      deleteBudget: builder.mutation({
        query: function query(_ref2) {
          var budgetId = _ref2.budgetId;
          return {
            url: "/v1/budget/".concat(budgetId),
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
exports.budgetApi = budgetApi;
var useGetAllBudgetsQuery = budgetApi.useGetAllBudgetsQuery,
    useAddBudgetMutation = budgetApi.useAddBudgetMutation,
    useUpdateBudgetMutation = budgetApi.useUpdateBudgetMutation,
    useDeleteBudgetMutation = budgetApi.useDeleteBudgetMutation;
exports.useDeleteBudgetMutation = useDeleteBudgetMutation;
exports.useUpdateBudgetMutation = useUpdateBudgetMutation;
exports.useAddBudgetMutation = useAddBudgetMutation;
exports.useGetAllBudgetsQuery = useGetAllBudgetsQuery;