import { combineReducers } from "redux"
import { cartReducer } from "./cartReducer"
import { priceReducer } from "./priceReducer"
import { userReducer } from "./userReducer"

const reducers = combineReducers({
	cart: cartReducer,
	price: priceReducer,
	user: userReducer,
})

export default reducers
