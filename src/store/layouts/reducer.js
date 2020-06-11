import { layoutTypes } from "../../constants/layout-types";
import { actionTypes } from "./action-types";

const layoutsReducerDefaultState = {
  layoutType: layoutTypes.list
};

export const layoutsReducer = (state = layoutsReducerDefaultState, action) => {
  switch (action.type) {
    case actionTypes.LIST_LAYOUT:
      return {
        layoutType: layoutTypes.list
      };
    case actionTypes.MASONRY_LAYOUT:
      return {
        layoutType: layoutTypes.masonry
      };
    default:
      return state;
  }
}