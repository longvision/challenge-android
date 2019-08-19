import {
  TOGGLE_CATEGORY,
  NEXT_PAGE,
  PREV_PAGE
} from '~/store/actions/category';

const INITIAL_STATE = {
  selectedCategory: {},
  currentLimit: 20,
  currentOffset: 0
};

export default function category(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TOGGLE_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload.selectedCategory
      };

    case NEXT_PAGE:
      return {
        ...state,
        currentLimit: action.payload.limit,
        currentOffset: action.payload.offset
      };
    case PREV_PAGE:
      return {
        ...state,
        currentLimit: action.payload.limit,
        currentOffset: action.payload.offset
      };

    default:
      return state;
  }
}
console.tron.log(category);
