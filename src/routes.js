import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

// Views are entire pages combined from sigle components
import LoginView from "./views/LoginView";
import DashboardView from "./views/DashboardView";
import PageMissingView from "./views/PageMissingView";

// SteemConnect Redirection logic needet to be extracted to separate component
import RedirectCallback from "./components/RedirectCallback";

// PrivateRoute needs access to store in order to determine, if user is authenticated
const PrivateRoute = connect(state => ({ user: state.user }))(
  ({ component: Component, user, ...routeProps }) => (
    <Route
      {...routeProps}
      render={props =>
        user.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  )
);

const Routes = ({ user }) => [
  <PrivateRoute path="/" exact component={DashboardView} key="index" />,
  <Route
    path="/redirect"
    exact
    component={RedirectCallback}
    key="sc2redirect"
  />,
  <Route path="/login" component={LoginView} key="login" />,
  // Matching all other routes - 404 view
  <Route component={PageMissingView} key="404" />
];

export default Routes;
