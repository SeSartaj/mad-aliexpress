import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "../constants";

const initialState = {
  numberOfProducts: 0,
  listOfProducts: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        numberOfProducts: state.numberOfProducts + 1,
        listOfProducts: [...state.listOfProducts, ...action.payload],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        numberOfProducts: state.numberOfProducts - 1,
        listOfProducts: [
          ...state.listOfProducts.filter((product) => {
            return product.id !== action.payload.id;
          }),
        ],
      };

    case CLEAR_CART:
      return initialState;

    default:
      return state;
  }
};
