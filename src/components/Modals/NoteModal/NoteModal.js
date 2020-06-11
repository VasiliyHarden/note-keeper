import React, { Fragment } from 'react';
import { Input, TextArea, ColorPicker } from './components';
import { validate } from './utils/validate';
import { ButtonGroup } from '../components/ButtonGroup/ButtonGroup';

import './NoteModal.scss';

const TITLE = 'title';
const DESCRIPTION = 'description';
const COLOR = 'color';

class NoteModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.note ? props.note.title : '',
      description: props.note ? props.note.description : '',
      color: props.note ? props.note.color : '',
      error: ''
    };
  }
  componentDidMount() {
    this.props.references.firstTabbable.current.focus();
  }
  onFieldChange = (value, type) => {
    this.setState(() => ({
      [type]: value
    }));
  }
  onSubmit = () => {
    const note = {
      title: this.state.title,
      description: this.state.description,
      color: this.state.color
    };

    const validationInfo = validate(note);
    if (validationInfo.success) {
      this.props.onSubmit(note);
    } else {
      this.setState(() => ({ error: validationInfo.error }));
    }
  };
  render() {
    return (
      <Fragment>
        <div className='modal__fields'>
          <Input
            value={this.state.title}
            onChange={this.onFieldChange}
            dataType={TITLE}
            reference={this.props.references.firstTabbable}
          />
          <TextArea
            value={this.state.description} 
            onChange={this.onFieldChange}
            dataType={DESCRIPTION}
          />
          <ColorPicker 
            onChange={this.onFieldChange} 
            color={this.state.color} 
            dataType={COLOR}
          />
          {
            this.state.error &&
            <p className='modal__error'>
              {this.state.error}
            </p>
          }
        </div>

        <ButtonGroup buttons={[{
            label: this.props.note ? 'Update' : 'Add',
            handler: this.onSubmit
          }, {
            label: 'Cancel',
            handler: this.props.onClose,
            ref: this.props.references.lastTabbable
          }]}
        />
      </Fragment>
    );
  }
}

export default NoteModal;