import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Views are entire pages combined from sigle components
import LoginView from './views/LoginView';
import DashboardView from './views/DashboardView';
import PageMissingView from './views/PageMissingView'

// PrivateRoute needs access to store in order to determine, if user is authenticated
const PrivateRoute = connect(state => ({user: state.user}))(({ component: Component, routeProps, user }) => (
    <Route
        {...routeProps}
        render={ props => user.isAuthenticated
                ? <Component {...props} />
                : <Redirect to="/login" />
        }
    />
));


const Routes = ({ user }) => [
    <PrivateRoute
        path='/'
        exact
        component={DashboardView}
        key="Index"
    />,

    <Route
        path="/login"
        component={LoginView}
        key="login"
    />,

    <Route
        path="/404"
        component={PageMissingView}
        key="404" 
    />,

    // Matching all other routes
    <Redirect to="/404" key="404Redirect"/>
];

export default Routes;
