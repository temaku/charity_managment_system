import React from "react";
import { Outlet } from "react-router-dom";
import { Home } from "../Home";


const BudgetIndexPage = (props) => {
  return (
    <Home>
      <Outlet />
    </Home>
  );
};

export default BudgetIndexPage;