import {v4 as uuid} from 'uuid';
import { actionTypes } from './action-types';

export const addNote = ({ title = '', description = '', color = '' } = {}) => ({
  type: actionTypes.ADD_NOTE,
  note: {
    id: uuid(),
    title,
    description,
    color
  }
}); 

export const editNote = (id, updates = {}) => ({
  type: actionTypes.EDIT_NOTE,
  id,
  updates
});

export const removeNote = (id) => ({
  type: actionTypes.REMOVE_NOTE,
  id
});