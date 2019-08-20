import { TOGGLE_PRODUCT } from '../actions/product';

const INITIAL_STATE = {
  selectedProduct: {}
};

export default function product(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TOGGLE_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload.selectedProduct
      };

    default:
      return state;
  }
}
console.tron.log(product);
