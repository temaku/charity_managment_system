import React from "react";
import { Home } from "../Home";
import { UserDataTable } from "./UserDataTable";
import { Button } from "antd";

import "./user.css";
import { Link } from "react-router-dom";

export const User = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex items-center justify-between flex-wrap-reverse mt-5 bg-gray-200 px-5 py-3">
          <div className="mt-4 md:w-1/3 w-full">
            <p className="font-bold text-md text-gray-800">Users</p>
          </div>

          <div className="mt-4  md:justify-end">
            <Link to="/users/add-user">
              <Button type="primary" className="px-7">
                Add Volunteers
              </Button>
            </Link>
          </div>
        </div>

        <UserDataTable />
      </div>
    </>
  );
};
