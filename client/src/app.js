import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import Public from './components/public';
import Account from './components/account';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import Signout from './components/auth/signout'
import AuthComponent from './components/auth/require_auth';
import { AUTH_USER } from './actions/types';
import { store } from './store';
import '../style/style.scss'

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
          <Route path="/account" element= {<AuthComponent Component={Account}/>} />
          <Route path="/signin" element= {<Signin/>} />
          <Route path="/signup" element= {<Signup/>} />
          <Route path="/signout" element= {<Signout/>} />
        </Routes>
      </div>
    </HashRouter>
  </Provider>
  , document.getElementById('root'));
