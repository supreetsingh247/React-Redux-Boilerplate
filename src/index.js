import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux'; //helps us access store from components
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css';

const store = configureStore();

/*This is the provider component which attaches app to store. Used at root. Wraps entire application.*/

render(
    <Provider store = {store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);


