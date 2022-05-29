import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../..";
import { User } from "../../../../helpers/types";
import UsersService from "../../../services/users.service";

export type usersState = {
  users: Array<User>;
  searchUsersList: Array<User>;
  isLoading: boolean;
  error: boolean;
  meta: {
    totalPage: number;
    currentPage: number;
    limit: number;
  };
};

// initial value
const initialState: usersState = {
  users: [],
  searchUsersList: [],
  isLoading: false,
  error: false,
  meta: {
    totalPage: 1,
    currentPage: 1,
    limit: 10,
  },
};

// This action is what we will call using the dispatch in order to trigger the API call.
// is used to get users
export const getUsersApi = createAsyncThunk<any, any>(
  "/users",
  async (payload, { rejectWithValue, fulfillWithValue, dispatch }) => {
    try {
      const { data: users } = await UsersService.getUsers();
      return fulfillWithValue(users);
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.users.push(payload);
      state.isLoading = false;
      state.searchUsersList = state.users;
    },
    //
    updateUser: (state, { payload }) => {
      state.users =
        state.users &&
        state.users.map((user: User) => {
          if (user.id === payload.id) {
            return payload;
          }
          return user;
        });
      state.searchUsersList = state.users;
    },
    // can be called when we want to remove User
    removeUser: (state, { payload: id }) => {
      state.users =
        state.users && state.users.filter((user: User) => user.id !== id);
      state.isLoading = false;
      state.searchUsersList = state.users;
    },
    searchusers: (
      state,
      { payload }: { payload: { name: string; tag: string } }
    ) => {
      state.searchUsersList =
        state.users &&
        state.users.filter((user: User) => {
          if (payload.name && user.fullName) {
            return user.fullName.toLowerCase().includes(payload.name);
          } else {
            return false;
          }
        });
    },
    // if we use pagination we can call the handlePaginate method
    handlePaginate: (state, { payload }) => {
      state.meta.currentPage = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersApi.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(getUsersApi.fulfilled, (state: any, { payload }) => {
        state.isLoading = false;
        state.users = payload;
        state.searchUsersList = state.users;
      })
      .addCase(getUsersApi.rejected, (state, { payload }:{payload :any}) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

// Action creators are generated for each case reducer function
export const { addUser, searchusers, removeUser, handlePaginate, updateUser } =
  usersSlice.actions;

export const usersSelector = (state: RootState) => state.users;

export default usersSlice.reducer;
