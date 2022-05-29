import Pagination from "../../common/Paginations";
import DonationTable from "../../components/DonationsTable";

function DonationPage() {
  return (
    <main>
      <DonationTable/>
      <Pagination />
    </main>
  );
}

export default DonationPage;
