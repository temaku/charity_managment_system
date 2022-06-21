import React from "react";

import {
  Charity,
  Dashboard,
  Donation,
  Login,
  User,
  Event,
  Task,
  FundDonation,
  Report,
  RegisterEvent,
  Budget
} from "../components";

import { Routes, Route } from "react-router-dom";

import { PageNotFound } from "./PageNotFound";
import UsersIndexPage from "../components/users/userlayout";
import CharityIndexPage from "../components/charity/charitylayout";
import AddEditUser from "../components/users/AddUserForm";
import EventIndexPage from "../components/events/eventslayout";
import AddCharity from "../components/charity/AddCharityForm";
import AddEvent from "../components/events/addEvents";
import { Fundraise } from "../components/fundraising/fundraise";
import AddFundraise from "../components/fundraising/addFundraise"
import  FundraiseIndexPage from "../components/fundraising/fundraiselayout"
import TaskIndexPage from "../components/tasks/tasklayout"
import AddTask from "../components/tasks/AddTaskForm";
import AddBudget from "../components/budgetAllocation/addBudget";
import BudgetIndexPage from "../components/budgetAllocation/budgetlayout";
import GenerateReport from "../components/reports/GenerateReport";



export const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />}></Route>

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<UsersIndexPage />}>
          <Route index element={<User />}></Route>
          <Route path="add-user" element={<AddEditUser />}/>
        </Route>
        <Route path="/charity" element={<CharityIndexPage />}>
          <Route index element={<Charity />}></Route>
          <Route path="add-charity" element={<AddCharity />}/>
        </Route>

        <Route path="/event" element={<EventIndexPage />}>
          <Route index element={<Event />}></Route>
          <Route path="add-event" element={<AddEvent />}/>
        </Route>

        <Route path="/fundraising" element={<FundraiseIndexPage />}>
          <Route index element={<Fundraise />}></Route>
          <Route path="add-fundraise" element={<AddFundraise />}/>
        </Route>
        <Route path="/tasks" element={<TaskIndexPage />}>
          <Route index element={<Task />}></Route>
          <Route path="add-task" element={<AddTask />}/>
        </Route>

        <Route path="/budgetAllocate" element={<BudgetIndexPage />}>
          <Route index element={<Budget />}></Route>
          <Route path="add-budget" element={<AddBudget />}/>
        </Route>

        <Route path="/fundonations" element={<FundDonation />} />
       
        <Route path="/donation" element={<Donation />} />
        <Route path="/reports" element={<Report />} />
        <Route path="/registerEvents" element={<RegisterEvent />} />
        <Route path="/fundraising" element={<Fundraise />} />
        <Route path="/generateReport" element={<GenerateReport />} />
      

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
