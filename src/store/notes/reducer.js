import { actionTypes } from "./action-types";

export const notesReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_NOTE: 
      return [action.note, ...state];
    case actionTypes.EDIT_NOTE:
      return [{
        ...state.find(note => note.id === action.id),
        ...action.updates
      }, 
      ...state.filter(note => note.id !== action.id)
    ];
    case actionTypes.REMOVE_NOTE:
      return state.filter(note => note.id !== action.id);
    default:
      return state;
  }
}