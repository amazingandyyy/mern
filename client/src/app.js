import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import Header from './components/header';
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
      <Header />
      <div className='container'>
        <Routes>
          <Route exact path="/" element= {<Home/>} />
          <Route path="/public" element= {<Public/>} />
          <Route path="/account" element= {RequireAuth(<Account />)} />
          <Route path="/signin" element= {<Signin/>} />
          <Route path="/signup" element= {<Signup/>} />
          <Route path="/signout" element= {<Signout/>} />
        </Routes>
      </div>
    </HashRouter>
  </Provider>
  , document.getElementById('root'));
