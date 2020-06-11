import ReactDOM from 'react-dom';
import React from 'react';
import NoteKeeperApp from './NoteKeeperApp';
import { StoreProvider } from './context/storeContext';
import createStore from './store/createStore';

import './index.scss';

const store = createStore();

const jsx = (
  <StoreProvider store={store}>
    <NoteKeeperApp />
  </StoreProvider>
);

ReactDOM.render(jsx, document.getElementById('app-root'));