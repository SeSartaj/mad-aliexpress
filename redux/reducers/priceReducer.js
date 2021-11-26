import {
  DECREASE_CART_PRICE,
  INCREASE_CART_PRICE,
  RESET_CART_PRICE,
} from "../constants";

const initialState = {
  totalPrice: 0,
};

export const priceReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_CART_PRICE:
      return {
        ...state,
        totalPrice: state.totalPrice + action.payload,
      };

    case DECREASE_CART_PRICE:
      return {
        ...state,
        totalPrice: state.totalPrice - action.payload,
      };

    case RESET_CART_PRICE:
      return {
        ...state,
        totalPrice: 0,
      };

    default:
      return state;
  }
};
