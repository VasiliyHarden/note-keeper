import React from "react";
import { connectToStore } from '../../../hoc/connectToStore';
import { concreteModals } from '../index';
import { closeModal } from "../../../store/modals";
import bodyFreezer from './utils/body-freezer';

import './Modal.scss';

const TAB = 9;
const ESC = 27;

class Modal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.references = {
      firstTabbable: React.createRef(),
      lastTabbable: React.createRef()
    };
    this.modalRef = React.createRef();
  }
  componentDidMount() {
    document.addEventListener('keydown', this.trapTabKey);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.trapTabkey);
  }
  trapTabKey = (e) => {
    if (!this.props.isOpen) {
      return;
    }
    if (e.keyCode === TAB) {
      if (this.modalRef.current.contains(document.activeElement)) {
        if (e.shiftKey && document.activeElement === this.references.firstTabbable.current) {
          e.preventDefault();
          this.references.lastTabbable.current.focus();
        } else if (!e.shiftKey && document.activeElement === this.references.lastTabbable.current) {
          e.preventDefault();
          this.references.firstTabbable.current.focus();
        }
      } else {
        e.preventDefault();
        this.references.firstTabbable.current.focus();
      }
    }
    if (e.keyCode === ESC) {
      this.props.closeModal();
    }
  };
  render() {
    if (!this.props.isOpen) {
      bodyFreezer.defreeze();
      return null;
    }

    bodyFreezer.freeze();
    const ConcreteModal = concreteModals[this.props.modalType];
    return (
      <div className='modal-wrapper'>
        <div className='modal-container'>
          <div 
            className='modal-overlay'
            onClick={() => { this.props.closeModal() }}
          />
          <div className='modal' ref={this.modalRef}>
            <ConcreteModal 
              {...this.props.props}
              references={this.references} 
              onClose={() => { this.props.closeModal() }}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  const { modals: { isOpen, modalType, props } } = store;
  return {
    isOpen,
    modalType,
    props
  }
};

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal())
});

export default connectToStore(mapStateToProps, mapDispatchToProps)(Modal);