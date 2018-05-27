// React dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// Redux & dependencies
import { 
    createStore,
    combineReducers,
    applyMiddleware,
    compose,
} from 'redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import loggerMiddleware from 'redux-logger';
import sagaMiddlewareFactory from 'redux-saga';

// Redux flow
import * as reducers from './reducers';
import rootSaga from './sagas';
import Routes from './routes';

import registerServiceWorker from './registerServiceWorker';

import 'normalize.css';

// global styles only because of vendor dependencies for sake of prototyping
// TODO: Rewrite all styles to custom StyledComponents
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './vendor/style.min.css'; 

// dotenv support
require('dotenv').config();
const sagaMiddleware = sagaMiddlewareFactory();

// creating Redux Store & applying uppermentioned middleware
const store = createStore(
    combineReducers({
        ...reducers,
    }),
    compose(
        applyMiddleware(
            sagaMiddleware,
            loggerMiddleware,
        ),
        window.devToolsExtension ? window.devToolsExtension() : f => f,
    ),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Routes />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
