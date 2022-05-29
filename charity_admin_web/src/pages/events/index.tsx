import { Link } from "react-router-dom";
import BaseLayout from "../../common/Layout";
import Pagination from "../../common/Paginations";
import EventsTable from "../../components/EventsTable";

function EventsPage() {
  return (
    <BaseLayout>
      <main>
        <EventsTable />
        <Pagination />
      </main>
    </BaseLayout>
  );
}

export default EventsPage;
