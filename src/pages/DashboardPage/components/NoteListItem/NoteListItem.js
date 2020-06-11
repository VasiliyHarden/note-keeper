import React from 'react';
import { NoteListItemView } from './NoteListItemView';
import { editNote } from '../../../../store/notes';
import { openModal, closeModal } from '../../../../store/modals';
import { modalTypes } from '../../../../constants/modal-types';
import { noteColors } from '../../../../constants/note-colors';
import { connectToStore } from '../../../../hoc/connectToStore';

import './NoteListItem.scss';

const ROW_HEIGHT = 10;
const resizeComponent = (wrapper, content) => {
  const contentHeight = content.getBoundingClientRect().height;
  const rowSpan = Math.ceil( (contentHeight + ROW_HEIGHT) / ROW_HEIGHT);
  wrapper.style.gridRowEnd = "span " + rowSpan;
}

class NoteListItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
    this.contentRef = React.createRef();
  }
  componentDidMount() {
    resizeComponent(this.wrapperRef.current, this.contentRef.current);
  }
  componentDidUpdate() {
    resizeComponent(this.wrapperRef.current, this.contentRef.current);
  }
  onModalOpen = (e) => {
    e.preventDefault();
    this.contentRef.current.blur();
    this.props.openModal(modalTypes.note, {
      note: this.props.note,
      onSubmit: this.onModalSubmit
    });
  };
  onModalSubmit = (updates) => {
    this.props.closeModal();
    this.props.editNote(this.props.note.id, updates);
  };
  onPossibleModalOpen = (e) => {
    if (e.keyCode === 13) {
      this.onModalOpen(e);
    }
  }
  render() {
    return (
      <div ref={this.wrapperRef}>
        <div 
          ref={this.contentRef}
          className={`note ${noteColors[this.props.note.color]}`}
          onClick={this.onModalOpen}
          onKeyDown={this.onPossibleModalOpen}
          tabIndex='0'
        >
          <NoteListItemView note={this.props.note} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  openModal: (modalType, props) => dispatch(openModal(modalType, props)),
  closeModal: () => dispatch(closeModal()),
  editNote: (id, updates) => dispatch(editNote(id, updates))
});

export default connectToStore(null, mapDispatchToProps)(NoteListItem);