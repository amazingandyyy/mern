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
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component= {App}>
      <IndexRoute component= {Home} />
        <Route path="/public" component= {Public} />
        <Route path="/secret" component= {Secret} />

        <Route path="/signin" component= {Signin} />
        <Route path="/signup" component= {Signup} />
        <Route path="/signout" component= {Signout} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
