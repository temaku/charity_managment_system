import React from "react";
import { Outlet } from "react-router-dom";
import { Home } from "../Home";


const TaskIndexPage = (props) => {
  return (
    <Home>
      <Outlet />
    </Home>
  );
};

export default TaskIndexPage;