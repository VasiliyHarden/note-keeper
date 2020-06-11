import React from 'react';

import './Input.scss';

class Input extends React.PureComponent {
  onChange = (e) => {
    this.props.onChange(e.target.value, this.props.dataType);
  }
  render() {
    return (
      <input
        type='text'
        placeholder='Provide a title'
        className='modal__input'
        value={this.props.value}
        onChange={this.onChange}
        ref={this.props.reference}
      />    
    );
  }
}

export default Input;