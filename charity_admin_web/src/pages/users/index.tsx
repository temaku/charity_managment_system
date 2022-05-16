import React, { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks/redux_hooks";
import { getUsersApi, usersSelector } from "../../app/store/features/users/usersSlice";
import BaseLayout from "../../common/Layout";
import Pagination from "../../common/Paginations";
import UsersTable from "../../components/UsersTable";

type Props = {};

const UsersPage = (props: Props) => {

  const dispatch = useAppDispatch();

  const fetchUsers = useCallback(async () => {
    await dispatch(getUsersApi({}));
  }, [dispatch]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <BaseLayout>
      <UsersTable />
      <Pagination />
    </BaseLayout>
  );
};

export default UsersPage;
