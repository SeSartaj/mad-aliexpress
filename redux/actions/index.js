import {
  ADD_TO_CART,
  CLEAR_CART,
  DECREASE_CART_PRICE,
  INCREASE_CART_PRICE,
  REMOVE_FROM_CART,
  RESET_CART_PRICE,
} from "../constants";

export const addItemToCart = (product) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
  };
};

export const removeItemFromCart = (product) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: product,
    });
  };
};

export const clearItemsFromCart = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_CART,
    });
  };
};

export const increaseCartPrice = (price) => {
  return (dispatch) => {
    dispatch({
      type: INCREASE_CART_PRICE,
      payload: price,
    });
  };
};

export const decreaseCartPrice = (price) => {
  return (dispatch) => {
    dispatch({
      type: DECREASE_CART_PRICE,
      payload: price,
    });
  };
};

export const resetCartPrice = () => {
  return (dispatch) => {
    dispatch({
      type: RESET_CART_PRICE,
    });
  };
};
