import { Link } from "react-router-dom";
import BaseLayout from "../../common/Layout";
import ArtistsTable from "../../components/ArtistsTable";

function ArtistsPage() {
  return (
    <BaseLayout>
      <main>
        <ArtistsTable />
      </main>
    </BaseLayout>
  );
}

export default ArtistsPage;
