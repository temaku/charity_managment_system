import { Link } from "react-router-dom";
import BaseLayout from "../../common/Layout";
import Pagination from "../../common/Paginations";
import EventsTable from "../../components/EventsTable";
import SongsTable from "../../components/TasksTable";

type Props = {
  from: string;
};

function SongsPage(props: Props) {
    
  return (
    <main>
      <SongsTable />
      <Pagination />
    </main>
  );
}

export default SongsPage;
