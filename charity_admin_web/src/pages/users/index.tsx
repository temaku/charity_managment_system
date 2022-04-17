import React from "react";
import BaseLayout from "../../common/Layout";
import Pagination from "../../common/Paginations";
import UsersTable from "../../components/UsersTable";

type Props = {};

const UsersPage = (props: Props) => {
  return (
    <BaseLayout>
      <UsersTable />
      <Pagination />
    </BaseLayout>
  );
};

export default UsersPage;
