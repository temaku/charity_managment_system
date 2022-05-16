import React from "react";
import BaseLayout from "../../common/Layout";
import Pagination from "../../common/Paginations";
import DashboardComponent from "../../components/Dashboard";

type Props = {};

const DashboardPage = (props: Props) => {
  return (
    <BaseLayout>
      <DashboardComponent />
      <Pagination />
    </BaseLayout>
  );
};

export default DashboardPage;
