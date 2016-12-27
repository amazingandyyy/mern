const axios = require('axios');
import {browserHistory} from 'react-router';
import {AUTH_USER, UNAUTH_USER, AUTH_ERROR, TRY_CONNECT} from './types';
const ROOT_URL = 'http://localhost:8000';

axios.defaults.baseURL = ROOT_URL;
if (localStorage.getItem('token')) {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
}
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export function signUserIn({email, password}) {
    return function (dispatch) {
        // Submit email/password to server
        axios
            .post(`/signin`, {email, password})
            .then(res => {
                dispatch({type: AUTH_USER})
                localStorage.setItem('token', res.data.token);
                browserHistory.push('/secret')
                axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
            })
            .catch(error => {
                console.log(error);
                dispatch({type: AUTH_ERROR, payload: 'Bad Login Info'})
            });
    }
}

export function signUserUp({email, password}) {
    return function (dispatch) {
        // Submit email/password to server
        axios
            .post(`/signup`, {email, password})
            .then(res => {
                dispatch({type: AUTH_USER})
                localStorage.setItem('token', res.data.token);
                browserHistory.push('/secret')
                axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
            })
            .catch(error => {
                console.log(error);
                dispatch({type: AUTH_ERROR, payload: 'Failed to Sign up, please try again.'})
            });
    }
}

export function signUserOut() {
    return function (dispatch) {
        dispatch({type: UNAUTH_USER})
        localStorage.removeItem('token');
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
                console.log(error.response.data);
            });
    }
}
