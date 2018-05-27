import React from "react";
import { Link } from "react-router-dom";

export default () => [
  <li className="sidebar-header" key="sidebar-header">
    Editor's Privilages
  </li>,
  <li className="nav-item" key="nav-item">
    <Link className="nav-link" to="/editor/">
      Write an article
    </Link>
    <a className="nav-link" href="#">
      Browse Drafts
    </a>
    <a className="nav-link" href="#">
      Browse Published
    </a>
    <a className="nav-link" href="#">
      Browse Deleted
    </a>
  </li>
];
