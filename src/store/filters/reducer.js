import { actionTypes } from "./action-types";

const filtersReducerDefaultState = {
  text: ''
};

export const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_TEXT_FILTER: 
      return {
        ...state,
        text: action.text
      };
    case actionTypes.CLEAR_TEXT_FILTER:
      return {
        ...state,
        text: ''
      }
    default:
      return state;
  }
}