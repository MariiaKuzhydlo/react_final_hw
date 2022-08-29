import { ADD_USER, GET_USERS } from "../../types";

const initialState = {
	users: [],
};


export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_USER: {
			return { ...state, users: [action.payload, ...state.users] };
		}
		case GET_USERS: {
			return { ...state, users: action.payload };
		}
		default: {
			return state;
		}
	}
};

export const userSelector = (state) => state.userReducer.users;
