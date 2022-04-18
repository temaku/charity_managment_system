import { Link, Outlet } from "react-router-dom";
import BaseLayout from "../../common/Layout";

function DonationsIndexPage() {
  return (
    <BaseLayout>
      <Outlet />
    </BaseLayout>
  );
}

export default DonationsIndexPage;
