import { actionTypes } from './action-types';

export const setTextFilter = (text = '') => ({
  type: actionTypes.SET_TEXT_FILTER,
  text
});

export const clearTextFilter = () => ({
  type: actionTypes.CLEAR_TEXT_FILTER
});