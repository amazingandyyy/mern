const axios = require('axios');
import {browserHistory} from 'react-router';
import {AUTH_USER, UNAUTH_USER, AUTH_ERROR} from './types';

const ROOT_URL = 'http://localhost:8000';

export function signUserIn({email, password}) {
    return function (dispatch) {
        // Submit email/password to server
        axios
            .post(`${ROOT_URL}/signin`, {email, password})
            .then(res => {
                browserHistory.push('/secret')
                dispatch({type: AUTH_USER})
                localStorage.setItem('token', res.data.token);
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
            .post(`${ROOT_URL}/signup`, {email, password})
            .then(res => {
                browserHistory.push('/secret')
                dispatch({type: AUTH_USER})
                localStorage.setItem('token', res.data.token);
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
