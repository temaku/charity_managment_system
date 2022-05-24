import React from "react";
import { Outlet } from "react-router-dom";
import { Home } from "../Home";


const EventsIndexPage = (props) => {
  return (
    <Home>
      <Outlet />
    </Home>
  );
};

export default  EventsIndexPage;