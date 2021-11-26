import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { priceReducer } from "./priceReducer";

const reducers = combineReducers({
  cart: cartReducer,
  price: priceReducer,
});

export default reducers;
