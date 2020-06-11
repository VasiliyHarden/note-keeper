import React from 'react';
import { addNote } from '../../../../store/notes';
import { closeModal, openModal } from '../../../../store/modals';
import { modalTypes } from '../../../../constants/modal-types';
import { connectToStore } from '../../../../hoc/connectToStore';

import './AddNoteButton.scss';

class AddNoteButton extends React.Component {
  onModalOpen = () => {
    this.props.openModal(modalTypes.note, {
      onSubmit: this.onModalSubmit
    });
  };
  onModalSubmit = (note) => {
    this.props.closeModal();
    this.props.addNote(note);
  };
  render() {
    return (
      <div>
        <button className='add-btn' onClick={this.onModalOpen}>
          +
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  openModal: (modalType, props) => dispatch(openModal(modalType, props)),
  closeModal: () => dispatch(closeModal()),
  addNote: (note) => dispatch(addNote(note))
});

export default connectToStore(null, mapDispatchToProps)(AddNoteButton);
