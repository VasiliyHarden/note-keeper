import React, { Fragment } from 'react';
import { ButtonGroup } from '../components/ButtonGroup/ButtonGroup';

import './ConfirmModal.scss';

const ConfirmModal = (props) => {
  return (
    <Fragment>
      <p className='modal__msg'>Are you sure you want to delete the note?</p>

      <ButtonGroup buttons={[{
          label: 'Yes',
          handler: props.onSubmit,
          ref: props.references.firstTabbable
        }, {
          label: 'No',
          handler: props.onClose,
          ref: props.references.lastTabbable
        }]}
      />
    </Fragment>
  );
};

export default ConfirmModal;