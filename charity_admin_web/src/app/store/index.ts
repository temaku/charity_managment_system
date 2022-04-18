import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import usersReducer from "./features/users/usersSlice";

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const createStore = () =>
  configureStore({
    reducer: {
      users: usersReducer,
    },
  });

export const store = createStore();

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
