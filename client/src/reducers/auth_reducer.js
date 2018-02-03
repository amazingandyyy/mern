import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    TRY_CONNECT
} from '../actions/types';

export default function(state={}, action) {
    switch (action.type) {
        case AUTH_USER:
            return { ...state, error: '', authenticated: true}
        case UNAUTH_USER:
            return { ...state, authenticated: false}
        case AUTH_ERROR:
            return { ...state, error: action.payload}
        case TRY_CONNECT:
            return { ...state, status: action.payload}
        default:
            return state
    }
}