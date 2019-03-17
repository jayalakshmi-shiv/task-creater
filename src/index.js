import React from "react";
import ReactDOM from 'react-dom';

//router
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

//components
import AppContainer from "./components/AppContainer";
import Task from './components/tasks/Task'



//css files
import 'bootstrap/dist/css/bootstrap.min.css';
import css from "./styles/global.css"

//dummy users and roles
import { roles, users } from "./data/users"

//redux config
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/';

const store = createStore(rootReducer);

const reactEl = document.getElementById("react-app");




ReactDOM.render(
    <Provider store={store}>
        <Router onUpdate={console.log}>
            <Switch>

                <AppContainer>
                    <Route exact path='/' component={Task} />
                </AppContainer>
            </Switch>
        </Router>
    </Provider>, reactEl);

// Provider
// console.log("Script Loads !")