import {
    GET_USER_PROFILE,
    UPDATE_USER_PROFILE_GOOD,
    UPDATE_USER_PROFILE_FAIL
} from '../actions/types';

let INITIAL_STATE = {
    updateProfileFailMsg: '',
    profile: null
}

export default function(state=INITIAL_STATE, action) {
    switch (action.type) {
        case GET_USER_PROFILE:
            return { ...state, profile: action.payload }
        case UPDATE_USER_PROFILE_GOOD:
            return { ...state, updateProfileFailMsg: '' }
        case UPDATE_USER_PROFILE_FAIL:
            return { ...state, updateProfileFailMsg: 'Incorrect Password' }
        default:
            return state
    }
}