import React from "react";
import { Outlet } from "react-router-dom";
import BaseLayout from "../../common/Layout";
import Pagination from "../../common/Paginations";
import CharityTable from "../../components/CharityTable";


type Props = {};

const CharitysIndexPage = (props: Props) => {
  return (
    <BaseLayout>
      <Outlet />
    </BaseLayout>
  );
};

export default CharitysIndexPage;
