import axios from 'axios';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, TRY_CONNECT } from './types';
const ROOT_URL = 'http://localhost:8000';

axios.defaults.baseURL = ROOT_URL;
if (localStorage.getItem('auth_jwt_token')) {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('auth_jwt_token');
}
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export function signUserIn({email, password}) {
    return function (dispatch) {
        // Submit email/password to server
        axios
            .post(`/signin`, {email, password})
            .then(res => {
                dispatch({type: AUTH_USER})
                localStorage.setItem('auth_jwt_token', res.data.token);
                // browserHistory.push('/secret')
                axios.defaults.headers.common['Authorization'] = localStorage.getItem('auth_jwt_token');
            })
            .catch(error => {
                console.log(error);
                dispatch({type: AUTH_ERROR, payload: 'Bad Login Info'})
            });
    }
}

export function signUserUp(userObj) {
    return function (dispatch) {
        // Submit email/password to server
        console.log('userObj: ', userObj)
        axios
            .post(`/signup`, userObj)
            .then(res => {
                dispatch({type: AUTH_USER})
                localStorage.setItem('auth_jwt_token', res.data.token);
                // browserHistory.push('/secret')
                axios.defaults.headers.common['Authorization'] = localStorage.getItem('auth_jwt_token');
            })
            .catch(error => {
                console.log(error);
                dispatch({type: AUTH_ERROR, payload: 'Failed to Sign up, please try again.'})
            });
    }
}

export function signUserOut() {
    return function (dispatch) {
        location.href = '/';
        dispatch({type: UNAUTH_USER})
        localStorage.removeItem('auth_jwt_token');
    }
}

export function fetchInfo() {
    return function (dispatch) {
        axios
            .get(`/api`)
            .then(res => {
                dispatch({
                    type: TRY_CONNECT,
                    payload: res.data.status
                })
            })
            .catch(error => {
                signUserOut()(dispatch);
                // console.log(error.response.data);
            });
    }
}
