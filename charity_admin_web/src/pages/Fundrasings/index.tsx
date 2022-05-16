import { Link } from "react-router-dom";
import BaseLayout from "../../common/Layout";
import Pagination from "../../common/Paginations";
import FundrasingTable from "../../components/FundrasingsTable";

function FundrasingsPage() {
  return (
    <BaseLayout>
      <main>
        <FundrasingTable />
        <Pagination />
      </main>
    </BaseLayout>
  );
}

export default FundrasingsPage;
