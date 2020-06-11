import { actionTypes } from "./action-types";

const modalsReducerDefaultState = {
  isOpen: false,
  modalType: null,
  props: null
};

export const modalsReducer = (state = modalsReducerDefaultState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_MODAL:
      const { modalType, props } = action;
      return {
        isOpen: true,
        modalType,
        props
      };
    case actionTypes.CLOSE_MODAL:
      return {
        isOpen: false
      };
    default:
      return state;
  }
}