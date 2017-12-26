import {
	LOGIN_USER,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
	user: null,
	loading: false,
	error: '',
	success: '',
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case LOGIN_USER:
			return {
				...state,
				loading: true,
				error:INITIAL_STATE.error
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				user: action.payload,
				loading: false
			};
		case LOGIN_FAIL:
			return {
				...state,
				error: action.payload,
				loading: false
			};
		default:
			return { ...state };
	}
};
