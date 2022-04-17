import * as React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import "./App.css";
import NotFoundPage from "./pages/404";
import AlbumsPage from "./pages/albums";
import ArtistsPage from "./pages/artists";
import Home from "./pages/artists";
import SigninPage from "./pages/auth/signin";
import DashboardPage from "./pages/dashboard";
import EventsPage from "./pages/events";
import SettingsPage from "./pages/settings";
import SubscriptionsPage from "./pages/subscriptions";
import UsersPage from "./pages/users";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/artists" element={<ArtistsPage />} />
        <Route path="/albums" element={<AlbumsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/subscriptions" element={<SubscriptionsPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
