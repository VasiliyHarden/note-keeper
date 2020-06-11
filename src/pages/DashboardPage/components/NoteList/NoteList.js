import React from 'react';
import NoteListItem from '../NoteListItem/NoteListItem';
import { connectToStore } from '../../../../hoc/connectToStore';
import { layoutTypes } from '../../../../constants/layout-types';
import { notesSelector } from '../../../../store/notes';

import './NoteList.scss';

class NoteList extends React.PureComponent {
  render() {
    const classes = `notes-container ${this.props.layoutType === layoutTypes.masonry ? 'notes-container--grid' : ''}`;
    return (
      <div className={classes}>
        {
          this.props.notes.map(note => {
            return (
              <NoteListItem key={note.id} note={note} />
            );
          })
        }      
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  const {notes, filters, layouts: {layoutType}} = store;
  return {
    notes: notesSelector(notes, filters),
    layoutType
  }
};

export default connectToStore(mapStateToProps)(NoteList);