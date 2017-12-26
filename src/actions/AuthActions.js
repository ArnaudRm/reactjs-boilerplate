import firebase from '../firebase';
import {
    LOGIN_USER,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
} from './types';

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });
        const userEmail = email.trim();
        firebase.auth().signInWithEmailAndPassword(userEmail, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch((error) => loginUserFail(dispatch, error));
    };
};

/**
 * Dispatches logged in user in Redux
 * @param {Object} dispatch
 * @param {string} error
 */
const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_SUCCESS,
        payload: user,
    });
};

/**
 * Dispatches login error message in Redux
 * @param {Object} dispatch
 * @param {string} error
 */
const loginUserFail = (dispatch, error) => {

    //List of Authentication error codes available here : https://firebase.google.com/docs/reference/node/firebase.auth.Auth
    let customErrorMessage;

    //Default error message 
    const { message } = error;

    switch (error.code) {
        case 'auth/wrong-password':
            customErrorMessage = ' Oops! Wrong password!';
            break;
        case 'auth/user-not-found':
            customErrorMessage = 'Unknown email address.';
            break;
        case 'auth/operation-not-allowed':
            customErrorMessage = 'You need to activate this sign-in method in your firebase console !!!'
            break;
        default:
            customErrorMessage = 'oops';
            break;
    }
    dispatch({
        type: LOGIN_FAIL,
        payload: customErrorMessage,
    });
};