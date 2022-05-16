import React from "react";
import BaseLayout from "../../common/Layout";
import Pagination from "../../common/Paginations";
import CharityTable from "../../components/CharityTable";

type Props = {};

const CharityPage = (props: Props) => {
  return (
    <main>
      <CharityTable />
      <Pagination />
    </main>
  );
};

export default CharityPage;
