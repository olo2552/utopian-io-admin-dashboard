import React from "react";

import SidebarToggler from "../components/SidebarToggler";
import Sidebar from "../components/Sidebar/Sidebar";
import UserThumbnail from "../components/UserThumbnail";

export default () => [
  <header className="app-header navbar">
    <SidebarToggler />
    <UserThumbnail />
  </header>,
  <div className="app-body h-100">
    <Sidebar />

    <main className="main h-100">sdfsdf</main>
  </div>,
  <footer className="app-footer">footer</footer>
];
