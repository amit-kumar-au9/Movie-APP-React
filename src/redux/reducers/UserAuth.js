const initialState = {
	user: null,
	userDetail: null,
	loginError: null,
	registerError: null,
	socialError: null,

	isLoadingUserDetail: false,
	isLoadingUserAuth: false,
	isUpdatingUserDetail: false,
};

const UserAuth = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'SET_USER':
			return { ...state, user: payload };
		case 'REMOVE_USER_DATA':
			return { ...state, userDetail: null };
		case 'GET_USER_DATA':
			return { ...state, userDetail: payload };
		case 'LOGIN_ERROR':
			return { ...state, loginError: payload };
		case 'REGISTER_ERROR':
			return { ...state, registerError: payload };
		case 'SOCIAL_ERROR':
			return { ...state, socialError: payload };

		case 'TOGGLE_IS_LOADING_USER_DATA':
			return {
				...state,
				isLoadingUserDetail: !state.isLoadingUserDetail,
			};
		case 'TOGGLE_IS_LOADING_AUTH_USER':
			return { ...state, isLoadingUserAuth: !state.isLoadingUserAuth };
		case 'TOGGLE_IS_UPDATING_USER_DATA':
			return {
				...state,
				isUpdatingUserDetail: !state.isUpdatingUserDetail,
			};
		default:
			return state;
	}
};

export default UserAuth;
