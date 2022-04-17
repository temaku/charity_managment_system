import React from "react";
import BaseLayout from "../../common/Layout";
import DashboardComponent from "../../components/Dashboard";

type Props = {};

const DashboardPage = (props: Props) => {
  return (
    <BaseLayout>
      <DashboardComponent />
    </BaseLayout>
  );
};

export default DashboardPage;
