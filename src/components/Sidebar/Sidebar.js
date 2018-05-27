import React from "react";
import { connect } from "react-redux";

import EditorPrivilages from "./EditorPrivilages";
import ModeratorPrivilages from "./ModeratorPrivilages";
import ManagerPrivilages from "./ManagerPrivilages";

const Sidebar = ({ sidebarDisplay }) => (
  <div className="sidebar sidebar-nav">
    <nav className="sidebar-nav">
      <ul className="nav">
        <EditorPrivilages />
        <ModeratorPrivilages />
        <ManagerPrivilages />
      </ul>
    </nav>
  </div>
);

export default connect(state => ({ sidebarDisplay: state.sidebarDisplay }))(
  Sidebar
);
