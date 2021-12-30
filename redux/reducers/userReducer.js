import { SIGN_IN_USER, SIGN_OUT_USER } from "../constants"

const initialState = {
	userDetails: {},
	jwt: "",
}

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case SIGN_IN_USER:
			return {
				...state,
				userDetails: action.payload.userDetails,
				jwt: action.payload.jwt,
			}

		case SIGN_OUT_USER:
			return {
				...state,
				userDetails: {},
				jwt: "",
			}

		default:
			return state
	}
}
