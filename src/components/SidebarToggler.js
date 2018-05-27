import React from "react";
import { connect } from "react-redux";

import { toggleSidebarDisplay } from "../actionCreators";

const SiderbarToggler = () => (
  <button
    className="navbar-toggler sidebar-toggler"
    type="button"
    data-toggle="sidebar-show"
    onClick={() => {
      toggleSidebarDisplay();
    }}
  >
    <span className="navbar-toggler-icon" />
  </button>
);

export default connect(null, { toggleSidebarDisplay })(SiderbarToggler);
