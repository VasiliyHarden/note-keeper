import React, { Fragment } from 'react';
import FilterBar from './components/FilterBar/FilterBar';
import NoteList from './components/NoteList/NoteList';
import AddNoteButton from './components/AddNoteButton/AddNoteButton';
import StatusBar from './components/StatusBar/StatusBar';

const DashboardPage = () => (
  <Fragment>
    <FilterBar />
    <NoteList />
    <AddNoteButton />
    <StatusBar />
  </Fragment>
);

export default DashboardPage;