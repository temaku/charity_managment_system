import * as React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import "./App.css";
import NotFoundPage from "./pages/404";
import CharityPage from "./pages/charity/charity";
import CharitysIndexPage from "./pages/charity/index";
import DonationPage from "./pages/Donations/donation";
import DonationsIndexPage from "./pages/Donations/index";
import SigninPage from "./pages/auth/signin";
import DashboardPage from "./pages/dashboard";
import EventsPage from "./pages/events";
import UserProfilePage from "./pages/profile";
import SettingsPage from "./pages/settings";
import SongsPage from "./pages/Tasks";
import FundrasingsPage from "./pages/Fundrasings";
import UsersPage from "./pages/users";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="charity" element={<CharitysIndexPage />}>
          <Route index element={<CharityPage />} />
          <Route path=":id" element={<SongsPage from="artists" />} />
        </Route>
        <Route path="donation" element={<DonationsIndexPage />}>
          <Route index element={< DonationPage/>} />
          <Route path=":id" element={<SongsPage from="albums" />} />
        </Route>
        <Route path="events" element={<EventsPage />} />
        <Route path="fundrasing" element={<FundrasingsPage />} />
        <Route path="signin" element={<SigninPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="me" element={<UserProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
