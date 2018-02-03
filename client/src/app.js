import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import Home from './components/home';
import Public from './components/public';
import Account from './components/account';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import Signout from './components/auth/signout'
import RequireAuth from './components/auth/require_auth';
import reducers from './reducers';
import { AUTH_USER } from './actions/types';

import '../style/style.scss'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers)
const token = localStorage.getItem('auth_jwt_token');

// if we have a token, consider the user to be signed in
if (token) {
  store.dispatch({type: AUTH_USER})
}
ReactDOM.render(
  <Provider store={store}>
    <HashRouter hashType="noslash">
      <App>
        <Switch>
          <Route exact path="/" component= {Home} />
          <Route path="/public" component= {Public} />
          <Route path="/account" component= {RequireAuth(Account)} />
          <Route path="/signin" component= {Signin} />
          <Route path="/signup" component= {Signup} />
          <Route path="/signout" component= {Signout} />
        </Switch>
      </App>
    </HashRouter>
  </Provider>
  , document.getElementById('root'));
