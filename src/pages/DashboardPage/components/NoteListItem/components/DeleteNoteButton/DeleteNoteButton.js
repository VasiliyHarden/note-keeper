import React from 'react';
import { removeNote } from '../../../../../../store/notes';
import { closeModal, openModal } from '../../../../../../store/modals';
import { modalTypes } from '../../../../../../constants/modal-types';
import { connectToStore } from '../../../../../../hoc/connectToStore';

import './DeleteNoteButton.scss';

class DeleteNoteButton extends React.Component {
  onModalOpen = (e) => {
    e.stopPropagation();
    this.props.openModal(modalTypes.confirm, {
      onSubmit: this.onModalSubmit
    });
  };
  onPossibleModalOpen = (e) => {
    e.stopPropagation();
    if (e.keyCode === 13) {
      this.onModalOpen(e);
    }
  }
  onModalSubmit = () => {
    this.props.closeModal();
    this.props.removeNote(this.props.id);
  };
  render() {
    return (
      <div className='delete-btn__wrapper'>
        <img 
          className='delete-btn' 
          src='assets/trash.svg' 
          tabIndex='0'
          onClick={this.onModalOpen}
          onKeyDown={this.onPossibleModalOpen}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  openModal: (modalType, props) => dispatch(openModal(modalType, props)),
  closeModal: () => dispatch(closeModal()),
  removeNote: (id) => dispatch(removeNote(id))
});

export default connectToStore(null, mapDispatchToProps)(DeleteNoteButton);
