import { createStore, combineReducers } from 'redux';
import { notesReducer } from './notes';
import { filtersReducer } from './filters';
import { modalsReducer } from './modals';
import { layoutsReducer } from './layouts';

export default () => {
  const store = createStore(combineReducers({
    notes: notesReducer,
    filters: filtersReducer,
    modals: modalsReducer,
    layouts: layoutsReducer
  }));
  return store;
}