import React from "react";
import BaseLayout from "../../common/Layout";
import AlbumsTable from "../../components/AlbumsTable";

type Props = {};

const AlbumsPage = (props: Props) => {
  return (
    <BaseLayout>
      <main>
        <AlbumsTable />
      </main>
    </BaseLayout>
  );
};

export default AlbumsPage;
