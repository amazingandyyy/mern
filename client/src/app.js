import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import Home from './components/home';
import Public from './components/public';
import Secret from './components/secret';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import Signout from './components/auth/signout'
import RequireAuth from './components/auth/require_auth';
import reducers from './reducers';
import { AUTH_USER } from './actions/types';

import '../style/style.scss'
import '../style/bootstrap.scss'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers)
const token = localStorage.getItem('token');

// if we have a token, consider the user to be signed in
if (token) {
  store.dispatch({type: AUTH_USER})
}
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component= {App}>
        <IndexRoute component= {Home} />
        <Route path="/public" component= {Public} />
        <Route path="/secret" component= {RequireAuth(Secret)} />
        <Route path="/signin" component= {Signin} />
        <Route path="/signup" component= {Signup} />
        <Route path="/signout" component= {Signout} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
