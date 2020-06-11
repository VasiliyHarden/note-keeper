import React, { Fragment } from 'react';
import DeleteNoteButton from './components/DeleteNoteButton/DeleteNoteButton';

class NoteListItemView extends React.Component {
  render() {
    return (
      <Fragment>
        <h3 className='note__title'>
          {this.props.note.title}
        </h3>
        <p className='note__description'>
          {this.props.note.description}
        </p>
        <DeleteNoteButton id={this.props.note.id} />
      </Fragment>
    );
  }
}

export { NoteListItemView };